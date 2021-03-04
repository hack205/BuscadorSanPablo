import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Calendario = () => {
    return (
      <View style={styles.container}>
        <Text>Calendario</Text>
        
      </View>
    );
};

export default Calendario;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});
