import React from 'react';
import styled from "styled-components";

const Flex = styled.div`
  display: flex;
  flex-direction: ${props => props.flexDirection};
  justify-content: ${props => props.justifyContent};
  align-items: ${props => props.alignItems};
  width: ${props => props.width};
  height: ${props => props.height};
  align-self: ${props => props.alignSelf};
  justify-self: ${props => props.justifySelf};
  background-color: ${props => props.backgroundColor};
  padding-right: ${props => props.paddingRight};
  margin-top: ${props => props.marginTop};
  row-gap: ${props => props.rowGap};
  column-gap: ${props => props.columnGap};
`

export default Flex;
