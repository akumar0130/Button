import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import FloatingButton from './FloatingButton';

import { MonoText } from '../components/StyledText';

export default function page3() {
  return (
    <View style={styles.container}>
     
        <View >

         <Text>PAGE3</Text>
         
        </View>

     
    </View>
  );
}

page3.navigationOptions = {
  header: null,
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  
});
