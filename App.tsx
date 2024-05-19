import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import styled, { ThemeProvider } from 'styled-components/native';
import light from './src/themes/light';
import Home from './src/screens/Home';

export default function App() {
  return (
    <ThemeProvider theme={light}>
    <Container>
      <StatusBar style="auto" />
      <Home/>
    </Container>
    </ThemeProvider>
  );
}

const Container = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
`;
