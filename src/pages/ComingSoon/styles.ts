/** @format */

import { Platform } from 'react-native';
import styled from 'styled-components/native';
import Constants from 'expo-constants';
import colors from '../../styles/colors';

const statusBarHeight =
  Platform.OS === 'android' ? Constants.statusBarHeight : 0;

export const Wrapper = styled.SafeAreaView`
  background: ${colors.primary};
  flex: 1;
  align-items: center;
  justify-content: center;
  padding-top: ${statusBarHeight + 'px'};
`;

export const Heading = styled.Text`
  font-size: 32px;
  font-weight: bold;
  color: ${colors.purple};
`;
