import React from 'react';
import { Container } from './styles';
import { Props } from './types';
import { ScrollView } from 'react-native';

export const Root: React.FC<Props> = ({ children }) => {
  return (
    <ScrollView showsHorizontalScrollIndicator={false} horizontal>
      <Container>{children}</Container>
    </ScrollView>
  );
};
