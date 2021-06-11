import { Avatar } from '../../shared/Avatar'
import DefaultButton from '../../shared/DefaultButton'
import {
    FaComment,
    FaArrowUp,
    FaArrowDown
} from 'react-icons/fa'
import { FeedWrapper, FeedHeader, FeedHeaderLeft, FeedContent, FeedFooter, RatingContainer, RatingButton } from './FeedItem.styles'
import { Post } from '../../../models/Post'

interface FeedItemProps {
   data: Post;
}


export default function FeedItem(props: FeedItemProps) {
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
            <FeedContent>
                <p>{props.data.title}</p>
            </FeedContent>
            <FeedFooter>
                <RatingContainer>
                    <RatingButton>
                        <FaArrowUp size={12} />
                    </RatingButton>
                        <span className="points">{props.data.rating}</span>
                    <RatingButton>
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
