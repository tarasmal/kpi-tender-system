import React from 'react';
import Flex from "./Flex";
import Text from "./Text";
import styled from "styled-components";

const StyledHeaderItem = styled(Flex)`
  color: ${props => props.color || 'white'};
  &:hover{
    cursor: pointer;
    color: burlywood;
  }
`


const HeaderItem = ({children}) => {
    return (
        <StyledHeaderItem>
            <Text>
                {children}
            </Text>
        </StyledHeaderItem>
    );
};


export default HeaderItem;
