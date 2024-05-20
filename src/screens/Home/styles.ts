import styled from 'styled-components/native';
import { FontAwesome6 } from '@expo/vector-icons';

export const Container = styled.SafeAreaView`
  background-color: ${({ theme }) => theme.background};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
`;

export const Body = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
`;

export const TransparentButton = styled.TouchableOpacity`
  background-color: transparent;
`;

export const IconFontAweasome6 = styled(FontAwesome6)`
  color: ${({ theme }) => theme.text};
`;

export const PixIcon = styled(IconFontAweasome6).attrs({
  name: 'pix',
  size: 24,
})``;

export const BarcodeIcon = styled(IconFontAweasome6).attrs({
  name: 'barcode',
  size: 24,
})``;

export const MoneyBillIcon = styled(IconFontAweasome6).attrs({
  name: 'money-bill-1',
  size: 24,
})``;

export const CircleDollarIcon = styled(IconFontAweasome6).attrs({
  name: 'circle-dollar-to-slot',
  size: 24,
})``;

export const ChartSimpleIcon = styled(IconFontAweasome6).attrs({
  name: 'chart-simple',
  size: 24,
})``;

export const HandDollarIcon = styled(IconFontAweasome6).attrs({
  name: 'hand-holding-dollar',
  size: 24,
})``;