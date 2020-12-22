import React from 'react';

import { ThemeContext } from './theme-context';

import styled from 'styled-components';

//styling inspired by https://github.com/LekoArts/gatsby-themes/blob/master/themes/gatsby-theme-minimal-blog/src/components/colormode-toggle.tsx
const Toggle = styled.button`
  opacity: 0.45;
  position: relative;
  border-radius: 5px;
  width: 40px;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.3s ease;
  border: none;
  outline: none;
  background: none;
  cursor: pointer;
  padding: 0;
  appearance: none;
`;

const Icon = styled.div`
  position: relative;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: ${props => (props.darkMode ? '4px solid #808080' : 'none')};
  background-color: ${props => (props.darkMode ? 'toggleIcon' : 'transparent')};
  transform: ${props => (props.darkMode ? 'scale(0.55)' : 'scale(1)')};
  transition: all 0.45s ease;
  overflow: ${props => (props.darkMode ? 'visible' : 'hidden')};
  box-shadow: ${props =>
    props.darkMode ? 'none' : 'inset 8px -8px 0px 0px #808080'};
  &:before {
    content: '';
    position: absolute;
    right: -9px;
    top: -9px;
    height: 24px;
    width: 24px;
    border: ${props => (props.darkMode ? '2px solid #808080' : 'none')};
    border-radius: 50%;
    transform: ${props =>
      props.darkMode ? 'translate(14px, -14px)' : 'translate(0, 0)'};
    opacity: ${props => (props.darkMode ? '0' : '1')};
    transition: transform 0.45s ease;
  }
  &:after {
    content: '';
    width: 8px;
    height: 8px;
    border-radius: 50%;
    margin: -4px 0 0 -4px;
    position: absolute;
    top: 50%;
    left: 50%;
    box-shadow: 0 -23px 0 #808080, 0 23px 0 #808080, 23px 0 0 #808080,
      -23px 0 0 #808080, 15px 15px 0 #808080, -15px 15px 0 #808080,
      15px -15px 0 #808080, -15px -15px 0 #808080;
    transform: ${props => (props.darkMode ? 'scale(1)' : 'scale(0)')};
    transition: all 0.35s ease;
  }
`;

const DarkToggle = () => {
  const { colorMode, setColorMode } = React.useContext(ThemeContext);

  if (!colorMode) {
    return null;
  }

  var darkMode = false;
  if (colorMode === 'dark') {
    darkMode = true;
  }

  return (
    <div>
      <Toggle
        onClick={() => setColorMode(darkMode ? 'light' : 'dark')}
        type="button"
        aria-label={
          darkMode ? `Activate Light Mode` : `Activate Dark Mode`
        }
        title={
          darkMode ? `Activate Light Mode` : `Activate Dark Mode`
        }
      >
        <Icon darkMode={!darkMode} />
      </Toggle>
    </div>
  );
};

export default DarkToggle;
