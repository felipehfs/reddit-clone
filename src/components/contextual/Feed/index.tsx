import {
    Wrapper,
    FeedDescriptor,
    FeedForm
} from './Feed.styles'
import {
    FaFire,
    FaAngleDown,
    FaBars
} from 'react-icons/fa'
import React, { useState } from 'react';
import FeedItem from '../FeedItem';
import { Post } from '../../../models/Post';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import api from '../../../services/api';
import Button from '../../shared/Button';

type PostSortingOptions = 'Hot' | 'Latest';

function Feed() {
    const [sortedBy, setSortedBy] = useState<PostSortingOptions>('Hot')
    const [post, setPost] = useState('')
    const [showSortedOptions, setShowSortedOptions] = useState(false)

    const queryClient = useQueryClient()
    
    const handleClickOptions = (newValue: PostSortingOptions) => {
        setSortedBy(newValue);
        setShowSortedOptions(false);
    }

    const {data: posts} = useQuery('channels', () => api.get('/posts')
        .then((resp => resp.data)))
    const mutation = useMutation((post: Post) => api.post('/posts', post), {
        onSuccess: () => {
            queryClient.invalidateQueries('channels');
            setPost('');
        }
    });
    
    const handleOnCreatePost = (event: React.MouseEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (!post.trim()) return;

        const id = Math.floor(Math.random() * 9999999).toString();

        mutation.mutate({
            id,
            avatarUrl: 'https://ui-avatars.com/api/?name=felipe+henrique',
            channel: 'even-keeled',
            rating: 0,
            time: new Date().toLocaleDateString(),
            title: post,
            totalComments: 0,
        });

    }

    return (
        <Wrapper>
            <FeedForm>
                <form onSubmit={handleOnCreatePost}>
                    <textarea 
                        onChange={event => setPost(event.target.value)}
                        value={post}
                    />
                    <footer>
                        <Button colorScheme="secondary" disabled={mutation.isLoading}>Enviar</Button>
                    </footer>
                </form>
            </FeedForm>
            <FeedDescriptor>
                <h2>Popular</h2>
                <footer>
                    <span className="category"><FaFire /> {sortedBy} <FaAngleDown onClick={() => setShowSortedOptions(true)} />
                        {showSortedOptions && (
                            <nav className="category-nav">
                                <button onClick={() => handleClickOptions('Hot')}>Hot</button>
                                <button onClick={() => handleClickOptions('Latest')}>Latest</button>
                            </nav>
                        )}
                    </span>
                    <span>
                        <FaBars /> {" "}
                        <FaAngleDown />
                    </span>
                </footer>
            </FeedDescriptor>
            {posts?.map((post: Post) => <FeedItem data={post} key={post.id} />)}
        </Wrapper>
    )
}

export default Feed;