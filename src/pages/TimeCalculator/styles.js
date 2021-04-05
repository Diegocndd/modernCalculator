import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';

const heightScreen = Dimensions.get('window').height;
const widthScreen = Dimensions.get('window').width;

const styles = StyleSheet.create({
    main: {
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'column',
        height: 0.9 * heightScreen,
    },
    firstContainer: {
        height: 2 * (0.9 * heightScreen) / 3,
        width: widthScreen,
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    timeInputs: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: widthScreen/1.6,
        alignItems: 'flex-end'
    },
    input: {
        color: '#000',
        fontSize: 23,
        backgroundColor: "#fff",
        textAlign: 'center',
    },
    indicator: {
        fontSize: 30,
        color: '#fff'
    },
    container: {
        flexDirection: 'row',
        alignItems: 'flex-end'
    },
    containerOperations: {
        flexDirection: 'row',
        width: widthScreen/5,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    operation: {
        color: '#fff',
        fontSize: 30,
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 4,
        borderColor: 'transparent'
    },
    secondContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#111',
        width: widthScreen,
        height: (0.9 * heightScreen) / 3
    },
    buttonEqual: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        backgroundColor: '#111',
        borderColor: 'white',
        borderWidth: 3,
        borderRadius: 30,
        width: 60,
        height: 60,
        top: -13,
    },
    modalContainer: {
        zIndex: 1,
        position: 'absolute',
        height: heightScreen,
        width: widthScreen,
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
    },
    modalContainer2: {
        width: widthScreen/1.4,
        height: heightScreen/3,
        backgroundColor: '#fff',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'absolute',
        top: heightScreen/3,
        left: widthScreen/7,
        borderRadius: 10,
    },
    textError: {
        fontSize: 17,
        textAlign: 'center',
        marginTop: 10,
    },
    containerText: {
        width: '70%'
    },
    info: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '80%'
    },
    okButton: {
        backgroundColor: '#eb4034',
        width: '100%',
        height: '20%',
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    textButton: {
        fontSize: 17,
        color: '#fff'
    }
});

export default styles;