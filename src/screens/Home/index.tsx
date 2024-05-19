import React from 'react';
import { Container, TransparentButton } from './styles';
import Header from '@/components/ProfileHeader';
import { Text } from 'react-native';
import { ProfileImage } from 'assets-stash/mocked';
import { ButtonSwith } from '@/components/ButtonSwitch';
import { FontAwesome6 } from '@expo/vector-icons';

const Home: React.FC = () => {
  return (
    <Container>
      <Header.Root>
        <Header.ActionsWrapper>
          <Header.Actions>
            <Header.Avatar avatar={ProfileImage} />
          </Header.Actions>
          <Header.Actions>
            <ButtonSwith
              initialState={true}
              activeNode={<FontAwesome6 name="eye" size={20} color="white" />}
              inactiveNode={
                <FontAwesome6 name="eye-slash" size={20} color="white" />
              }
            />
            <TransparentButton>
              <FontAwesome6 name="circle-question" size={20} color="white" />
            </TransparentButton>
            <TransparentButton>
              <FontAwesome6 name="user" size={20} color="white" />
            </TransparentButton>
          </Header.Actions>
        </Header.ActionsWrapper>
        <Header.Title text="Olá, Profile" />
      </Header.Root>
    </Container>
  );
};

export default Home;
