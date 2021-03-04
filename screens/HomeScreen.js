import React from 'react';
import { View, Text, Button, StyleSheet, StatusBar } from 'react-native';
import { useTheme } from '@react-navigation/native';
import ImageView from 'react-native-image-view';

const HomeScreen = ({ navigation }) => {

  const { colors } = useTheme();

  const theme = useTheme();
  const images = [
    {
      source: {
        uri: 'https://cdn.pixabay.com/photo/2017/08/17/10/47/paris-2650808_960_720.jpg',
      },
      title: 'Paris',
      width: 806,
      height: 720,
    },
  ];
  return (
    <View style={styles.container}>
      <StatusBar barStyle={theme.dark ? "light-content" : "dark-content"} />
      <ImageView
        images={images}
        imageIndex={0}
        renderFooter={(currentImage) => (<View><Text>My footer</Text></View>)}
      />
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
