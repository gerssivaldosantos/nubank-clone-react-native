import { Container } from './styles';
import React from 'react';
import { Props } from './types';

export const Action: React.FC<Props> = ({ children }) => {
  return <Container>{children}</Container>;
};
