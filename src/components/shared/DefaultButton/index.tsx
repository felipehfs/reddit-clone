import React from "react"
import { Wrapper } from "./DefaultButton.styles"

interface DefaultButtonProps {
  onClick?: () => void;
}

const DefaultButton: React.FC<DefaultButtonProps> = (props) => {
  return <Wrapper onClick={props.onClick}>{props.children}</Wrapper>
}

export default DefaultButton
