import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100%;
  background-color: ${(props) => props.theme.background};
`
