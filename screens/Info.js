import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Info = () => {
    return (
      <View style={styles.container}>
        <Text>Información</Text>
        
      </View>
    );
};

export default Info;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});
