import { StatusBar } from 'expo-status-bar';
import { Button, Image,  Modal,  StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Welcome to Microskool</Text>
      <TextInput placeholder='Enter Email' style={styles.inputs} />
      <TextInput placeholder='Enter Password' style={styles.inputs} />
      
            <Button onPress={()=>{
        alert('Login not yet Integrated')
      }} color={'rgb(83,83,170)'} title='Login Now'/>
      <StatusBar  style="auto" />
      <Image style={styles.image} source={''} />
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image:{
    backgroundColor:'green'
  },
  inputs:{
    backgroundColor:'whitesmoke',
    padding:10,
    margin:5,
    width:300,
  }


});