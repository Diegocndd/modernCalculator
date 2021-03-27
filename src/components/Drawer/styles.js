import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';

const heightScreen = Dimensions.get('window').height;
const widthScreen = Dimensions.get('window').width;

const styles = StyleSheet.create({
    optionContainer: {
        height: heightScreen/15,
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        padding: 4,
    },
    textContainer: {
        fontSize: 14,
        color: '#fff',
        letterSpacing: 1,
    },
    drawerContainer: {
        flexDirection: 'column',
        justifyContent: 'space-around',
        height: heightScreen/2.5,
    },
    line: {
        backgroundColor: '#424242',
        width: widthScreen/2.1,
        height: 1,
        marginLeft: 4,
    }
});

export default styles;