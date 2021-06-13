import { Avatar } from '../../shared/Avatar'
import DefaultButton from '../../shared/DefaultButton'
import {
    FaComment,
    FaArrowUp,
    FaArrowDown
} from 'react-icons/fa'
import { FeedWrapper, FeedHeader, FeedHeaderLeft, FeedContent, FeedFooter, RatingContainer, RatingButton } from './FeedItem.styles'
import { Post } from '../../../models/Post'
import { useMutation, useQueryClient } from 'react-query'
import api from '../../../services/api'
import { useHistory } from 'react-router-dom'

interface FeedItemProps {
   data: Post;
}


export default function FeedItem(props: FeedItemProps) {
    const queryClient = useQueryClient();
    const history = useHistory();

    const mutation = useMutation((post: Post) => api.put(`/posts/${post.id}`, post), {
        onSuccess: () => {
            queryClient.invalidateQueries("channels")
        }
    });

    function handleUpVote() {
        mutation.mutate({
            ...props.data,
            rating: props.data.rating + 1
        });
    }

    function handleDownVote() {
        mutation.mutate({
            ...props.data,
            rating: props.data.rating - 1,
        });
    }

    return (
        <FeedWrapper>
            <FeedHeader>
                <FeedHeaderLeft>
                    <Avatar src={props.data.avatarUrl} alt="Avatar" size={24}/>
                    <span>
                        {props.data.channel}
                    </span>
                    <time>
                        {props.data.time}
                    </time>
                </FeedHeaderLeft>
            </FeedHeader>
            <FeedContent onClick={() => history.push(`/posts/${props.data.id}`)}>
                <p>{props.data.title}</p>
            </FeedContent>
            <FeedFooter>
                <RatingContainer>
                    <RatingButton disabled={mutation.isLoading} onClick={handleUpVote}>
                        <FaArrowUp size={12} />
                    </RatingButton>
                        <span className="points">{props.data.rating}</span>
                    <RatingButton disabled={mutation.isLoading} onClick={handleDownVote}>
                        <FaArrowDown size={12} />
                    </RatingButton>
                </RatingContainer>
                <DefaultButton>
                    <FaComment />
                    <span style={{ padding: '0 8px'}}>{props.data.totalComments}</span>
                </DefaultButton>
            </FeedFooter>
        </FeedWrapper>
    )
}
