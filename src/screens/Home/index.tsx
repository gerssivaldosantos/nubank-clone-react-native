import React from 'react';
import {
  BarcodeIcon,
  Container,
  MoneyBillIcon,
  PixIcon,
  TransparentButton,
  Body,
  CircleDollarIcon,
  ChartSimpleIcon,
  HandDollarIcon,
} from './styles';
import Header from '@/components/ProfileHeader';
import { Text } from 'react-native';
import { ProfileImage } from 'assets-stash/mocked';
import { ButtonSwith } from '@/components/ButtonSwitch';
import { FontAwesome6 } from '@expo/vector-icons';
import { Actions } from '@/components/Actions';

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
      <Actions.Root>
        <Actions.Action>
          <Actions.Button>
            <PixIcon />
          </Actions.Button>
          <Actions.Label>
            <Text>Área pix</Text>
          </Actions.Label>
        </Actions.Action>
        <Actions.Action>
          <Actions.Button>
            <BarcodeIcon />
          </Actions.Button>
          <Actions.Label>Pagar</Actions.Label>
        </Actions.Action>
        <Actions.Action>
          <Actions.Button>
            <MoneyBillIcon />
          </Actions.Button>
          <Actions.Label>Transferir</Actions.Label>
        </Actions.Action>
        <Actions.Action>
          <Actions.Button>
            <CircleDollarIcon />
          </Actions.Button>
          <Actions.Label>Cobrar</Actions.Label>
        </Actions.Action>
        <Actions.Action>
          <Actions.Button>
            <ChartSimpleIcon />
          </Actions.Button>
          <Actions.Label>Investir</Actions.Label>
        </Actions.Action>
        <Actions.Action>
          <Actions.Button>
            <HandDollarIcon />
          </Actions.Button>
          <Actions.Label>Caixinhas</Actions.Label>
        </Actions.Action>
      </Actions.Root>
    </Container>
  );
};

export default Home;
