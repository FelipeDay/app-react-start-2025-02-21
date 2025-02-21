import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.Text}>Leave us, slayer of Demons.
      This is a sanctuary for the lost and wretched.
      There is nothing here for you to pillage or plunder.
      Please, leave quietly.</Text>
      <Image style={styles.Image}
      source={{uri: 'https://img.wattpad.com/cover/260423019-256-k429944.jpg'}}></Image>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#B8AD7F',
    alignItems: 'center',
    justifyContent: 'center',
  },

  Image: {
    width: 256,
    height: 400,
  },

  Text: {
    fontSize: 15,
    color: 'white',
  }
});
