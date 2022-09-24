import styled from "styled-components";

const StyledText = styled.p`
  color: ${props => props.color};
  font-size: ${props => props.fontSize};
`

const Text = ({children, ...props}) => {
    return (
        <StyledText
        {...props}
        >
        {children}
    </StyledText>
    );
}

export default Text
