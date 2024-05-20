import React from 'react';
import { Props } from './types';
import { Container } from './styles';

export const Button: React.FC<Props> = ({ children, ...props }) => {
  return <Container {...props}>{children}</Container>;
};
