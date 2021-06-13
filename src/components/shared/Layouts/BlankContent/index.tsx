import React from "react";
import { Container } from './BlankContent.styles';
import Header from "../../../contextual/Header"


const BlankContent: React.FC = props => {
    return (
        <Container>
            <Header />
            {props.children}
        </Container>
    )
}

export default BlankContent;