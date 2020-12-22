import React from 'react';
import styled from 'styled-components';

import { ThemeContext } from './theme-context';

import DarkToggle from './dark-toggle';

const Header = ({ siteTitle }) => {
  return (
    <Wrapper>
      {siteTitle}
      <DarkToggle />
    </Wrapper>
  );
};

const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 16px;
`;

export default Header;
