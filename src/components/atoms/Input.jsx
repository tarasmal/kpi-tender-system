import React from 'react';
import styled from "styled-components";

const StyledInput = styled.input`
  border-radius: ${props => props.borderRadius || '15px'};
  width: ${props => props.width};
  height: ${props => props.height};
  padding: ${props => props.padding};
  padding-left: ${props => props.paddingLeft};
`

const Input = ({placeholder, ...props}) => {
    return (
        <StyledInput
            placeholder={placeholder}
            {...props}
        />

    );
};

export default Input;
