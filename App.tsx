import React from 'react';
import { 
  View,
  Text,
} from 'react-native';

import styles from './styles';

import HeaderComponent from './src/components/HeaderComponent'

const App = () => {

  return(
    <>
      <HeaderComponent
        urlImage='https://www.igotravel.app/archivos/config/favicon.png'
        textUp='Bienvenido'
        textDown='Desarrollador'
        onPress={ () => console.log('Hola')}
      />
      <View style={ styles.container }>
        <Text style={styles.text}>Hola Mundo</Text>
      </View>
    </>
    
  )
}

export default App;