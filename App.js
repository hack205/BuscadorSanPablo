/* eslint-disable react-native/no-inline-styles */

import React, {useEffect} from 'react';
import {View, ActivityIndicator} from 'react-native';
import {
  NavigationContainer,
  DefaultTheme as NavigationDefaultTheme,
  DarkTheme as NavigationDarkTheme,
} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';

import {
  Provider as PaperProvider,
  DefaultTheme as PaperDefaultTheme,
  DarkTheme as PaperDarkTheme,
} from 'react-native-paper';

import {DrawerContent} from './screens/DrawerContent';
import MainTabScreen from './screens/MainTabScreen';
import SupportScreen from './screens/SupportScreen';
import SettingsScreen from './screens/SettingsScreen';
import RegisterUserScreen from './screens/RegisterUser';
import NotasScreen from './screens/Notas';
import CalendarioScreen from './screens/Calendario';
import InfoScreen from './screens/Info';
import {AuthContext} from './components/context';


import RootStackScreen from './screens/RootStackScreen';

import AsyncStorage from '@react-native-community/async-storage';


import firebase from './android/app/lib/firebase';
const Drawer = createDrawerNavigator();

const App = () => {
  // const [isLoading, setIsLoading] = React.useState(true);
  // const [userToken, setUserToken] = React.useState(null);
  const [isDarkTheme, setIsDarkTheme] = React.useState(false);

  const initialLoginState = {
    isLoading: true,
    userName: null,
    userToken: null,
  };

  const CustomDefaultTheme = {
    ...NavigationDefaultTheme,
    ...PaperDefaultTheme,
    colors: {
      ...NavigationDefaultTheme.colors,
      ...PaperDefaultTheme.colors,
      background: '#ffffff',
      text: '#333333',
    },
  };

  const CustomDarkTheme = {
    ...NavigationDarkTheme,
    ...PaperDarkTheme,
    colors: {
      ...NavigationDarkTheme.colors,
      ...PaperDarkTheme.colors,
      background: '#333333',
      text: '#ffffff',
    },
  };

  const theme = isDarkTheme ? CustomDarkTheme : CustomDefaultTheme;

  const loginReducer = (prevState, action) => {
    switch (action.type) {
      case 'RETRIEVE_TOKEN':
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGIN':
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGOUT':
        return {
          ...prevState,
          userName: null,
          userToken: null,
          isLoading: false,
        };
      case 'REGISTER':
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
    }
  };

  const [loginState, dispatch] = React.useReducer(
    loginReducer,
    initialLoginState,
  );



  const authContext = React.useMemo(
    () => ({
      signIn: async (username, password) => {
        // setIsLoading(false);
        const userToken = JSON.stringify({username, password});
        try {
          await AsyncStorage.setItem('userToken', userToken);
          const  userCredential = await firebase.auth().createUserWithEmailAndPassword(username, password);
        } catch (e) {
          console.log(e);
        }
        dispatch({type: 'LOGIN', id: 'userName', token: userToken});
      },
      signOut: async () => {
        // setUserToken(null);
        // setIsLoading(false);
        try {
          
          await AsyncStorage.removeItem('userToken');
        } catch (e) {}
        dispatch({type: 'LOGOUT'});
      },
      toggleTheme: () => {
        setIsDarkTheme(!isDarkTheme);
      },
    }),
    [isDarkTheme],
  );

  useEffect(() => {
    setTimeout(async () => {
      let userToken = null;
      try {
        userToken = await AsyncStorage.getItem('userToken');

        const {username} = JSON.parse(userToken);
        userToken  = await firebase.auth().createUserWithEmailAndPassword(username, password);


      } catch (e) {
        console.log(e);
      }
      dispatch({type: 'RETRIEVE_TOKEN', token: userToken});
    }, 1000);
  }, []);

  if (loginState.isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large" />
      </View>
    );
  }
  return (
    <PaperProvider theme={theme}>
      <AuthContext.Provider value={authContext}>
        <NavigationContainer theme={theme}>
          {loginState.userToken !== null ? (
              <Drawer.Navigator
                drawerContent={props => <DrawerContent {...props} />}>
                <Drawer.Screen name="HomeDrawer" component={MainTabScreen} />
                <Drawer.Screen name="SupportScreen" component={SupportScreen} />
                <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
                <Drawer.Screen name="RegisterUserScreen" component={RegisterUserScreen} />
                <Drawer.Screen name="NotasScreen" component={NotasScreen} />
                <Drawer.Screen name="CalendarioScreen" component={CalendarioScreen} />
                <Drawer.Screen name="InfoScreen" component={InfoScreen} />
              </Drawer.Navigator>
          ) : (
            <RootStackScreen />
          )}
        </NavigationContainer>
      </AuthContext.Provider>
    </PaperProvider>
  );
};

export default App;
