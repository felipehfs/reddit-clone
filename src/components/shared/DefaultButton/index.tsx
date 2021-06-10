import React from 'react'
import {
    Wrapper
} from './DefaultButton.styles'

const DefaultButton: React.FC = (props) => {
    return (
        <Wrapper>
            {props.children}
        </Wrapper>
    )
}

export default DefaultButton
