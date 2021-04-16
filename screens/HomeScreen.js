import React from 'react';
import { View, Text, Button, StyleSheet, StatusBar, ScrollView } from 'react-native';
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-cards';
import MenuMap from '../components/MenuMap';
const HomeScreen = ({ navigation }) => {
  const [visibleModal, setVisibleModal] =  React.useState(false);
  return (
    <View style={styles.container}>
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
      <MenuMap visibleModal={visibleModal} setVisibleModal={setVisibleModal}/>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
});
