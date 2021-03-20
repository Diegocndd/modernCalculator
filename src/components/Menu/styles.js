import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';

const heightScreen = Dimensions.get('window').height;
const widthScreen = Dimensions.get('window').width;

const styles = StyleSheet.create({
    modal: {
        height: heightScreen,
        width: widthScreen,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    containerModal: {
        borderRadius: 40,
        borderWidth: 1,
        backgroundColor: '#000',
        width: widthScreen * 90 / 100,
        height: heightScreen * 90 / 100,
        padding: 20,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    titleMenu: {
        letterSpacing: 2,
        color: '#fff',
        fontSize: 23
    },
    textOptions: {
        color: '#fff',
        marginLeft: 14,
        fontSize: 18,
    },
    option: {
        width: (widthScreen * 90 / 100),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginTop: 10,
        borderWidth: 0,
        borderTopColor: '#686868',
        padding: 10,
        borderBottomColor: '#686868',
    }
});

export default styles;