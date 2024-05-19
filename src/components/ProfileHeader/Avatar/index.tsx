import React from 'react';
import { Props } from './types';
import { View } from 'react-native';
import { StyledImage } from './styles';

export const Avatar: React.FC<Props> = ({ avatar }) => {
  return (
    <View>
      <StyledImage source={{ uri: avatar }} />
    </View>
  );
};
