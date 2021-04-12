

import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

//import Animacion1 from './components/Animacion1';
//import Animacion2 from './components/Animacion2'
//import Animacion3 from './components/Animacion3'
import Animacion4 from './components/Animacion4'

const App = () => {

  return(

    <>
        <View style={ styles.contenido }>
              <Animacion4 />
        </View>
    </>

  );
  
};

const styles = StyleSheet.create({

  contenido: {
    marginTop: 50
  }
  
});

export default App;
