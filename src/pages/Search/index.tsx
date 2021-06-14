import React from 'react'
import { useParams } from 'react-router-dom'
import { SearchHero, SearchContent} from './Search.styles'
import BlankContent from '../../components/shared/Layouts/BlankContent'
import FeedItem from '../../components/contextual/FeedItem'
import { useQuery } from 'react-query'
import { Post } from '../../models/Post'
import api from '../../services/api'

export default function Search() {
    const params = useParams<{term: string}>()

    async function fetchResultsPost(term: string): Promise<Post[]> {
        const response = await api.get<Post[]>(`/posts?channel=${term}`);
        return response.data;
    }

    const { data } = useQuery(['channels/search',  params.term], () =>  fetchResultsPost(params.term))

    return (
        <BlankContent initialSearch={params.term}>
            <SearchHero>
                <h1>{params.term}</h1>
                {data && <small>{data.length} Resultados</small>}
            </SearchHero>
            <SearchContent>
                {
                    data?.map(post => <FeedItem data={post} key={post.id} />)
                }            
            </SearchContent>
        </BlankContent>
    )
}
