import { fontSize } from '@/themes/sizes';
import React from 'react';
import styled from 'styled-components/native';

type Props = {
  children?: React.ReactNode | React.ReactNode[];
};

const Container = styled.Text`
  font-size: ${fontSize.sm}px;
  color: ${({ theme }) => theme.text};
  margin-top: ${fontSize.sm}px;
  max-width: 100px;
  text-align: center;
`;

export const Label: React.FC<Props> = ({ children }: Props) => {
  return <Container>{children}</Container>;
};
