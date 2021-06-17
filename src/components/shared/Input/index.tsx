import React from "react";
import {
    Wrapper,
    Label,
    FormControl,
    Warning
} from "./Input.styles"

interface InputProps {
    label: string;
    type: string;
    placehoulder?: string;
    value: string;
    errorMessage?: string;
    error?: boolean;
    onChange: React.ChangeEventHandler<HTMLInputElement>;
}

function Input(props: InputProps) {
    const {label, ...inputProps} = props;
    return (
        <Wrapper>
            <Label>{props.label}</Label>
            <FormControl {...inputProps}/>
            {props.error && <Warning>{props.errorMessage}</Warning> }
        </Wrapper>
    )
}

export default Input;