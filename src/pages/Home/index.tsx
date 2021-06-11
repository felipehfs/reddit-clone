import React from 'react'
import Feed from '../../components/contextual/Feed'
import Header from '../../components/contextual/Header'
import { Container, FeedContainer } from './Home.styles'

interface Props {
    
}

const Home = (props: Props) => {
    return (
        <Container>
            <Header />
            <FeedContainer>
                <Feed />
            </FeedContainer>
        </Container>
    )
}

export default Home
