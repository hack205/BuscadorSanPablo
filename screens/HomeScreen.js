import React from 'react';
import { View, Text, Button, StyleSheet, StatusBar, ScrollView } from 'react-native';
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-cards';
const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <ScrollView>
        <Card>
          <CardImage
            source={
              require('../assets/Auxiliares/Javier.jpg')
            }
            title="Francisco Javier Varela Sosa"
          />
          <CardTitle
            subtitle="SubCordinador"
          />
          
          <CardAction
            separator={true}
            inColumn={false}>
            <CardButton
              onPress={() => {navigation.navigate('Informacion')}}
              title="Información"
              color="#FEB557"
            />
            <CardButton
              onPress={() => { }}
              title="Compartir"
              color="#FEB557"
            />
          </CardAction>
        </Card>

      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
});
