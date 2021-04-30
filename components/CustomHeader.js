import React from 'react';
import { View, StyleSheet, Text,Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import IconF from 'react-native-vector-icons/FontAwesome';
import {
  DrawerContentScrollView,
  DrawerItem
} from '@react-navigation/drawer';

const {height, width} = Dimensions.get('window');
const CustomHeader = ({ openDrawer, navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.menu}>
          <Icon.Button
            name="ios-menu"
            size={25}
            backgroundColor="transparent"
            onPress={() => openDrawer()}
          />
        </View>
        <View style={styles.options}>
          <View style={styles.optionsIcons}>
            <IconF.Button
              name="user-plus"
              size={20}
              backgroundColor="transparent"
              onPress={() =>  {navigation.navigate('Home')}}
            />
          </View>
        </View>
        
      </View>
    </View>
  );
};


export default CustomHeader;


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  menu: {
    flex: 2,
  },
  title: {
    flex: 2,
  },
  options: {
    flexDirection: 'row',
    flex: 2,
    
  },
  optionsIcons: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: width * 0.72,
  },
  iconInfo: {
    flex: 1,
  },
  iconHere: {
    flex: 1,
  },
  iconRoute: {
    flex: 1,
  },

});

