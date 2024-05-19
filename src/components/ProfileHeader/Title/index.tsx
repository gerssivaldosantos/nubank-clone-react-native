import React from 'react';
import { Props } from './types';
import { View } from 'react-native';
import { Container } from './styles';

export const Title: React.FC<Props> = ({ text }) => {
  return <Container>{text}</Container>;
};
