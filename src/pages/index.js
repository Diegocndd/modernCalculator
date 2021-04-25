import React from 'react';
import {StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import Calculator from './Calculator';
import Conversor from './Conversor';
import Percentage from './Percentage';
import TimeCalculator from './TimeCalculator';
import Header from '../components/Header';
import {useSelector} from 'react-redux';

export const PageCalculator = () => {
  const themesColors = useSelector(state => state.themes);
  const {firstColor, secondColor} = themesColors;
  return (
    <LinearGradient colors={[firstColor, secondColor]} style={styles.gradient}>
      <Header />
      <Calculator />
    </LinearGradient>
  );
};

export const PageConversor = () => {
  const themesColors = useSelector(state => state.themes);
  const {firstColor, secondColor} = themesColors;
  return (
    <LinearGradient colors={[firstColor, secondColor]} style={styles.gradient}>
      <Header />
      <Conversor />
    </LinearGradient>
  );
};

export const PageTimeCalculator = () => {
  const themesColors = useSelector(state => state.themes);
  const {firstColor, secondColor} = themesColors;
  return (
    <LinearGradient colors={[firstColor, secondColor]} style={styles.gradient}>
      <Header />
      <TimeCalculator />
    </LinearGradient>
  );
};

export const PagePercentage = () => {
  const themesColors = useSelector(state => state.themes);
  const {firstColor, secondColor} = themesColors;
  return (
    <LinearGradient colors={[firstColor, secondColor]} style={styles.gradient}>
      <Header />
      <Percentage />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
});
