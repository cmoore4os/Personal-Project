//import React from 'react';
import { styled } from 'styletron-react';
import { colors } from '../constants/Theme';

export const Container = styled('div', {
  padding: '5px'
});

export const Nav = styled('ul', props => ({
  display: 'flex',
  alignItems: 'center'
}));
export const NavItem = styled('li', props => ({
  padding: '2rem',
  textDecoration: 'none',
  color: colors.ltAccent,
  ':hover': {
    color: colors.dkAccent
  }
}));

export const Panel = styled('div', props => ({
  backgroundColor: props.backgroundColor
    ? props.backgroundColor
    : colors.primary,
  fontSize: '12px'
}));

export const Text = styled('p', props => ({
  fontSize: '16px'
}));
