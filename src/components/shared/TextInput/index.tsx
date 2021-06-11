import React from 'react'
import {
    Wrapper,
    Input,
    IconButton
} from './TextInput.styles';

interface TextInputProps {
    icon: React.ReactNode;
    value: string;
    type: string;
    onChange: React.ChangeEventHandler<HTMLInputElement>;
}

function TextInput(props: TextInputProps) {
    return (
        <Wrapper>
            <IconButton>
                {props.icon}
            </IconButton>
            <Input 
                onChange={props.onChange}
                type={props.type} value={props.value} />
        </Wrapper>
    )
}

export default TextInput;