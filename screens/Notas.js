import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Notas = () => {
    return (
      <View style={styles.container}>
        <Text>Notas</Text>
        
      </View>
    );
};

export default Notas;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});
