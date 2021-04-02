import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';

const heightScreen = Dimensions.get('window').height;
const widthScreen = Dimensions.get('window').width;

const styles = StyleSheet.create({
    dropDown: {
        height: 40,
        width: widthScreen/2.2,
    },
    dropContainer: {
        height: heightScreen/6,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    firstComponent: {
        justifyContent: 'flex-start',
        flexDirection: 'column',
        alignItems: 'center',
        height: 0.45 * heightScreen,
    },
    input: {
        fontSize: 60,
        color: '#fff',
    },
    secondComponent: {
        backgroundColor: '#111',
        height: 0.45 * heightScreen,
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
    },
    output: {
        fontSize: 60,
        color: '#fff'
    },
    scroll: {
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: 20
    },
    measureOption: {
        justifyContent: 'center', 
        alignItems: 'center', 
        paddingBottom: 3,
        flexDirection: 'row',
        marginBottom: 10,
        borderWidth: 1,
        borderRadius: 10,
    },
    textMeasure: {
        fontSize: 18,
        color: '#fff'
    },
});

export default styles;