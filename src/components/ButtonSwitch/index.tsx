import React, { useState } from 'react';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import styled from 'styled-components/native';

interface Props extends TouchableOpacityProps {
  initialState?: boolean;
  activeNode: React.ReactNode;
  inactiveNode: React.ReactNode;
  onHandlePress?: () => void;
}

const TransparentButtonContainer = styled(TouchableOpacity)`
  background-color: transparent;
`;

export const ButtonSwith: React.FC<Props> = ({
  initialState,
  activeNode,
  inactiveNode,
  onHandlePress,
  ...rest
}) => {
  const [active, setActive] = useState(initialState || false);
  const onPress = () => {
    setActive((prevState) => !prevState);
    onHandlePress && onHandlePress();
  };
  return (
    <TransparentButtonContainer onPress={onPress} {...rest}>
      {active ? activeNode : inactiveNode}
    </TransparentButtonContainer>
  );
};
