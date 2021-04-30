import React from 'react';
import { View, Text, Button, StyleSheet, StatusBar, ScrollView } from 'react-native';
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-cards';
import MenuMap from '../components/MenuMap';
import Modal from '../components/Modal';
const HomeScreen = ({ navigation }) => {
  const [visibleModal, setVisibleModal] = React.useState(false);
  const [TipeModal, setTipeModal] = React.useState('');
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
              onPress={() => {navigation.navigate('InfoScreen')}}
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
      <Modal
        visibleModal={visibleModal}
        setVisibleModal={setVisibleModal}
        setTipeModal={setTipeModal}
        TipeModal={TipeModal}
      />
      <MenuMap visibleModal={visibleModal} setVisibleModal={setVisibleModal} TipeModal={TipeModal} setTipeModal={setTipeModal}/>
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
