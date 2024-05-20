import { fontSize } from '@/themes/sizes';
import styled from 'styled-components/native';

export const Container = styled.View`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: ${fontSize.sm}px;
  padding: ${fontSize['2xl']}px ${fontSize.lg}px 0 ${fontSize['2xl']}px;
`;
