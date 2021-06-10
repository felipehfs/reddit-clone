import React from 'react'
import Feed from '../../components/contextual/Feed'
import Header from '../../components/contextual/Header'

interface Props {
    
}

const Home = (props: Props) => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            <Header />
            <Feed />
        </div>
    )
}

export default Home
