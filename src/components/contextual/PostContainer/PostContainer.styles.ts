import styled from "styled-components"

export const PostWrapper = styled.section`
  margin-top: 8px;
  padding: 16px;
  background-color: ${(props) => props.theme.navbarBackground};
`

export const PostHeader = styled.header`
  display: flex;
  align-items: center;
  gap: 8px;

  & > time {
    color: #949ca1;
    font-size: 12px;
  }
`

export const Text = styled.p`
  color: #424e53;
  font-weight: 400;
  font-size: 14px;
`

export const PostContent = styled.main`
  padding: 24px 0;
  font-size: 16px;
  border-bottom: 1px solid #ccc;
`

export const Comments = styled.footer`
  padding: 16px 0;

  & form {
    margin-top: 16px;
  }

  & textarea {
    width: 100%;
    min-height: 80px;
    margin-bottom: 16px;
  }
`

export const CommentItem = styled.article`
  padding: 16px 0;
  padding-left: 16px;
`
export const CommentContent = styled.p`
  padding: 12px 0;
`
