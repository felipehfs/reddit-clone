import React from "react"
import { Container, GridContainer } from "./FormLayout.styles"
import Header from "../../../contextual/Header"

const ForumLayout: React.FC = (props) => {
  return (
    <Container>
      <Header />
      <GridContainer>{props.children}</GridContainer>
    </Container>
  )
}

export default ForumLayout
