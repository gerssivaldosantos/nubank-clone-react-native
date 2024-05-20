import { StatusBar } from 'expo-status-bar';
import styled, { ThemeProvider } from 'styled-components/native';
import light from './src/themes/light';
import Home from './src/screens/Home';
import React from 'react';

export default function App() {
  return (
    <ThemeProvider theme={light}>
      <Container>
        <StatusBar translucent={false} backgroundColor={light.primary} style="light" />
        <Home />
      </Container>
    </ThemeProvider>
  );
}

const Container = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  font-family: sans-serif;
`;
