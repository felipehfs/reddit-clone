import React from "react"
import Feed from "../../components/contextual/Feed"
import Header from "../../components/contextual/Header"
import { Container, FeedContainer } from "./Home.styles"
import TopUserCard from "../../components/contextual/TopUserCard"

interface Props {}

const Home = (props: Props) => {
  return (
    <Container>
      <Header />
      <FeedContainer>
        <Feed />
        <aside>
          <TopUserCard />
        </aside>
      </FeedContainer>
    </Container>
  )
}

export default Home
