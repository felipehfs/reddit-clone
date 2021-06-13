import React from "react"
import { Wrapper, Header } from "./AsideCard.styles"

interface AsideCardProps {
  title: string
}

function AsideCard(props: React.PropsWithChildren<AsideCardProps>) {
  return (
    <Wrapper>
      <Header>{props.title}</Header>
      <main>{props.children}</main>
    </Wrapper>
  )
}

export default AsideCard
