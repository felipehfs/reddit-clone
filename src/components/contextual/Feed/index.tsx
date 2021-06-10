import {
    Wrapper,
    FeedDescriptor
} from './Feed.styles'
import {
    FaFire,
    FaAngleDown,
    FaBars
} from 'react-icons/fa'
import { useState } from 'react';
import FeedItem from '../FeedItem';
import { Post } from '../../../models/Post';

function Feed() {
    const [sortedBy, setSortedBy] = useState('Hot')
    const [showSortedOptions, setShowSortedOptions] = useState(false)
    const handleClickOptions = (newValue: string) => {
        setSortedBy(newValue);
        setShowSortedOptions(false);
    }

    const [posts, setPosts] = useState<Post[]>([
        {
            id: '120202',
            avatarURL: 'https://i.pravatar.cc/64',
            channel: 'r/javascript',
            rating: 0,
            time: '1h',
            title: 'Is there any alternative for object spread syntax that will work in ES2017 for this example?',
            totalComments: 10,
        },
        {
            id: '120202f',
            avatarURL: 'https://i.pravatar.cc/32',
            channel: 'r/javascript',
            rating: 3,
            time: '1h',
            title: 'Is there a way to simulate key presses to a text input?',
            totalComments: 10,
        },
        {
            id: '120202fg',
            avatarURL: 'https://i.pravatar.cc/32',
            channel: 'r/javascript',
            rating: 2,
            time: '1h',
            title: 'Changing tab shortcut behaves differently since latest upgrade',
            totalComments: 10,
        },
        {
            id: '120202fgg',
            avatarURL: 'https://i.pravatar.cc/32',
            channel: 'r/javascript',
            rating: 2,
            time: '1h',
            title: 'Cloudflare vs NextDNS?',
            totalComments: 10,
        },
        {
            id: '120202fggx',
            avatarURL: 'https://i.pravatar.cc/32',
            channel: 'r/javascript',
            rating: 2,
            time: '1h',
            title: 'Is there anyone with a multimeter and thinkpad yoga (s3) 14?',
            totalComments: 2,
        },
    ])

    return (
        <Wrapper>
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
            {posts.map(post => <FeedItem data={post} key={post.id} />)}
        </Wrapper>
    )
}

export default Feed;