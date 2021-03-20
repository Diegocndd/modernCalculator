import React from 'react';
import { StyleSheet } from 'react-native';
import Calculator from './src/pages/Calculator';
import Header from './src/components/Header';
import LinearGradient from 'react-native-linear-gradient';

const App = () => {

  return (
    <LinearGradient colors={['#6a3093', '#a044ff']} style={styles.gradient}>
      <Header/>
      <Calculator/>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
})

export default App;
