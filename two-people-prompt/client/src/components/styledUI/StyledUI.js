import React from 'react';
import { styled } from 'styletron-react';
import { colors } from '../constants/Theme';

export const Container = styled('div', {
  padding: '5px'
});
export const Panel = styled('div', props => ({
  backgroundColor: props.backgroundColor
    ? props.backgroundColor
    : colors.primary,
  fontSize: '12px'
}));

export const Text = styled('p', props => ({
  fontSize: '16px'
}));
