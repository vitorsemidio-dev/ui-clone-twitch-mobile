/** @format */

import React from 'react';

import { Text } from 'react-native';

import Header from '../../components/Header';

import { Wrapper, Container, Main } from './styles';

const Following: React.FC = () => {
  return (
    <Wrapper>
      <Container>
        <Header />
        <Main>
          <Text style={{ color: '#fff' }}>Following</Text>
        </Main>
      </Container>
    </Wrapper>
  );
};

export default Following;
