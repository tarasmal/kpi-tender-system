import React from 'react';
import Flex from "../atoms/Flex";
import styled from "styled-components";
import HeaderItem from "../atoms/HeaderItem";

const StyledHeader = styled(Flex)`
  border-radius: ${props => props.borderRadius};
  padding: ${props => props.padding};
  padding-right: ${props => props.paddingRight};
`
const headerItems = [
    {
        title: 'Main',
    },
    {
        title: 'Settings',
    },
    {
        title: 'Profile'
    }
]

const Header = () => {
    return (
        <StyledHeader
            width={'65%'}
            height={'50px'}
            backgroundColor={'black'}
            alignSelf={'center'}
            borderRadius={'20px'}
            justifyContent={'space-between'}
            paddingRight={'25px'}
            marginTop={'15px'}

        >
            <Flex
                width={'30%'}
                justifyContent={'space-around'}>
                {
                    headerItems.map(({title}, key) => <HeaderItem key={key}>{title}</HeaderItem>)
                }
            </Flex>
            <HeaderItem>
                Log out
            </HeaderItem>

        </StyledHeader>
    );
};

export default Header;
