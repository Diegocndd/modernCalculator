import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import store from '../../store';

const heightScreen = Dimensions.get('window').height;
const widthScreen = Dimensions.get('window').width;

const styles = StyleSheet.create({
    mainContainer: {
    },
    display: {
        height: 0.7 * heightScreen / 3,
        justifyContent: 'center',
        alignItems: 'flex-end',
        padding: 30,
    },
    result: {
        color: '#fff',
        fontSize: 45,
    },
    keyboard: {
        height: 2 * heightScreen / 3,
        backgroundColor: '#111'
    },
    row: {
        height: (2 * heightScreen / 3) / 5,
        flexDirection: 'row',
    },
    column: {
        width: widthScreen / 4,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center' ,
    },
    keyboardText: {
//        color: '#a044ff',
        fontSize: 30
    },
    textRow1: {
        color: '#fff',
        fontSize: 20,
    }
});

export default styles;