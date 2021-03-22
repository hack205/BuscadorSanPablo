import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from './HomeScreen';
import CustomHeader from '../components/CustomHeader';
import {useTheme} from '@react-navigation/native';

import * as color from '../utils/colors';
const HomeStack = createStackNavigator();

const HomeStackScreen = ({navigation}) => {
  const theme = useTheme();

  return (
    <HomeStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: theme.dark ? color.grey : color.white,
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerTitle: () => (
            <CustomHeader openDrawer={navigation.openDrawer} />
          ),
        }}
      />
    </HomeStack.Navigator>
  );
};
export default HomeStackScreen;
