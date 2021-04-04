import React from 'react';
import { StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import Calculator from './Calculator';
import Conversor from './Conversor';
import Percentage from './Percentage';
import TimeCalculator from './TimeCalculator';
import Header from '../components/Header';

export const PageCalculator = () => {
    return (
        <LinearGradient colors={['#C06C84', '#a044ff']} style={styles.gradient}>
            <Header/>
            <Calculator/>
        </LinearGradient>
    )
}

export const PageConversor = () => {
    return (
        <LinearGradient colors={['#C06C84', '#a044ff']} style={styles.gradient}>
            <Header/>
            <Conversor/>
        </LinearGradient>
    )
}

export const PageTimeCalculator = () => {
    return (
        <LinearGradient colors={['#C06C84', '#a044ff']} style={styles.gradient}>
            <Header/>
            <TimeCalculator/>
        </LinearGradient>
    )
}

export const PagePercentage = () => {
    return (
        <LinearGradient colors={['#C06C84', '#a044ff']} style={styles.gradient}>
            <Header/>
            <Percentage/>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    gradient: {
      flex: 1,
    },
});
  