import React from "react"
import Feed from "../../components/contextual/Feed"
import TopUserCard from "../../components/contextual/TopUserCard"
import ForumLayout from "../../components/shared/Layouts/ForumLayout"

interface Props {}

const Home = (props: Props) => {
  return (
      <ForumLayout>
        <Feed />
        <aside>
          <TopUserCard />
        </aside>
      </ForumLayout>
  )
}

export default Home
