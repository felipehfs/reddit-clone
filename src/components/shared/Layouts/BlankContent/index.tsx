import React from "react";
import { Container } from './BlankContent.styles';
import Header from "../../../contextual/Header"

interface BlankContentProps {
    initialSearch?: string;
}


const BlankContent: React.FC<BlankContentProps> = props => {
    return (
        <Container>
            <Header initialSearch={props.initialSearch} />
            {props.children}
        </Container>
    )
}

export default BlankContent;