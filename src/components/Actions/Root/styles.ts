import { fontSize } from '@/themes/sizes';
import styled from 'styled-components/native';

export const Container = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: ${fontSize.sm}px;
`;
