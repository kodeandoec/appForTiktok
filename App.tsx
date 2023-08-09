import React from 'react';
import { 
  View,
  Text,
} from 'react-native';

import styles from './styles';

const App = () => {

  return(
    <View style={ styles.container }>
      <Text style={styles.text}>Hola Mundo</Text>
    </View>
  )
}

export default App;