import { Avatar } from "../../shared/Avatar"
import { v4 as uuid } from "uuid"
import {
  PostWrapper,
  PostHeader,
  PostContent,
  Text,
  Comments,
  CommentItem,
  CommentContent,
} from "./PostItem.styles"
import { useMutation, useQuery, useQueryClient } from "react-query"
import api from "../../../services/api"
import { useParams } from "react-router-dom"
import Button from "../../shared/Button"
import React, { useState } from "react"
import { Post } from "../../../models/Post"
import { useAtom } from "jotai"
import { SessionAtom } from "../../../atoms/SessionAtom"

export default function PostItem() {
  const queryClient = useQueryClient()
  const params = useParams<{ id: string }>()
  const [comment, setComment] = useState("")
  const [session] = useAtom(SessionAtom)

  async function getPostById(id: string): Promise<Post> {
    const response = await api.get(`/posts/${id}`)
    return response.data
  }

  const { data, isLoading } = useQuery(["channels", params.id], () =>
    getPostById(params.id)
  )

  const addComment = useMutation(
    (post: Post) => api.put(`/posts/${post.id}`, post),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("channels")
        setComment("")
      },
    }
  )

  function handleOnSubmit(event: React.MouseEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!data) return

    const actualComments = data.comments ?? []

    const newComment: Post = {
      id: uuid(),
      avatarUrl: session.avatarUrl,
      channel: session.name,
      rating: 0,
      time: new Date().toLocaleDateString(),
      title: comment,
      totalComments: 0,
      comments: [],
    }

    const updatedPost: Post = {
      ...data,
      totalComments: data.totalComments + 1,
      comments: [...actualComments, newComment],
    }

    addComment.mutate(updatedPost)
  }

  if (isLoading) {
    return null
  }

  if (!data) return null

  return (
    <PostWrapper>
      <PostHeader>
        <Avatar size={32} src={data.avatarUrl} />
        <Text>{data?.channel}</Text>
        <time>{data.time}</time>
      </PostHeader>
      <PostContent>
        <p>{data?.title}</p>
      </PostContent>
      <Comments>
        {data?.comments?.map((comment: any) => (
          <CommentItem key={comment.id}>
            <PostHeader>
              <Avatar size={32} src={comment.avatarUrl} />
              <Text>{comment.channel}</Text>
              <time>{comment.time}</time>
            </PostHeader>
            <CommentContent>{comment.title}</CommentContent>
          </CommentItem>
        ))}
        <form onSubmit={handleOnSubmit}>
          <textarea
            value={comment}
            onChange={(event) => setComment(event.target.value)}
          />
          <Button colorScheme="secondary">Comentar</Button>
        </form>
      </Comments>
    </PostWrapper>
  )
}
