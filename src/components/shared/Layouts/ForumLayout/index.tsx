import React from "react"
import BlankContent from "../BlankContent"
import {  GridContainer } from "./FormLayout.styles"

const ForumLayout: React.FC = (props) => {
  return (
    <BlankContent>
      <GridContainer>{props.children}</GridContainer>
    </BlankContent>
  )
}

export default ForumLayout
