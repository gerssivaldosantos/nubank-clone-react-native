import styled from 'styled-components/native';
import { FontAwesome6 } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
export const Container = styled.SafeAreaView`
  background-color: ${({ theme }) => theme.background};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
`;

export const TransparentButton = styled.TouchableOpacity`
  background-color: transparent;
`;

export const IconFontAweasome6 = styled(FontAwesome6)`
  color: ${({ theme }) => theme.text};
`;

export const IconFeather = styled(Feather)`
  color: ${({ theme }) => theme.text};
`;

export const PixIcon = styled(IconFontAweasome6).attrs({ name: 'pix', size: 24 })``;

export const BarcodeIcon = styled(IconFontAweasome6).attrs({ name: 'barcode', size: 24 })``;

export const MoneyBillIcon = styled(IconFontAweasome6).attrs({ name: 'money-bill-1', size: 24 })``;

export const SmartphoneIcon = styled(IconFeather).attrs({ name: 'smartphone', size: 24 })``;