import React from 'react';
import { Container } from './styles';
import { Props } from './types';

export const Root: React.FC<Props> = ({ children }) => {
  return <Container>{children}</Container>;
};
