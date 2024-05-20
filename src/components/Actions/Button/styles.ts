import { fontSize } from '@/themes/sizes';
import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.card};
  padding: ${fontSize['2xl']}px;
  border-radius: 200px;
  align-items: center;
  justify-content: center;
`;
