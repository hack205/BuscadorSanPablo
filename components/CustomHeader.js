import React from 'react';
import {View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const CustomHeader = ({openDrawer}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.menu}>
            <Icon.Button
                name="ios-menu"
                size={25}
                backgroundColor="transparent"
                underlayColor="transparent"
                onPress={() => {
                  openDrawer();
                }}
            />
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
    flex: 1,
  }
});
