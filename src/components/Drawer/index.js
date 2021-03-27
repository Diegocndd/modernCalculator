import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import IconI from 'react-native-vector-icons/Ionicons';
import IconFA from 'react-native-vector-icons/FontAwesome5';

import styles from './styles';

const DrawerContent = ({navigation}) => {

    return (
        <View style={styles.drawerContainer}>

            <TouchableOpacity onPress={() => {navigation.navigate('Calculator')}}>
                <View style={styles.optionContainer}>
                    <IconFA name="calculator" size={24} color="#fff" style={{marginRight: 10}}/>
                    <Text style={styles.textContainer}>
                        CALCULADORA
                    </Text>
                </View>
            </TouchableOpacity>
         
            <View style={styles.line}></View>

            <TouchableOpacity onPress={() => {navigation.navigate('Conversor')}}>
                <View style={styles.optionContainer}>
                    <IconFA name="exchange-alt" size={24} color="#fff" style={{marginRight: 10}}/>
                    <Text style={styles.textContainer}>
                        CONVERSOR DE MEDIDAS
                    </Text>
                </View>
            </TouchableOpacity>

            <View style={styles.line}></View>

            <TouchableOpacity onPress={() => {navigation.navigate('TimeCalculator')}}>
                <View style={styles.optionContainer}>
                    <IconI name="time" size={24} color="#fff" style={{marginRight: 10}}/>
                    <Text style={styles.textContainer}>
                        CALCULADORA DE TEMPO
                    </Text>
                </View>
            </TouchableOpacity>

            <View style={styles.line}></View>

            <TouchableOpacity onPress={() => {navigation.navigate('Percentage')}}>
                <View style={styles.optionContainer}>
                    <IconFA name="percentage" size={24} color="#fff" style={{marginRight: 18}}/>
                    <Text style={styles.textContainer}>
                        PORCENTAGEM
                    </Text>
                </View>
            </TouchableOpacity>

            <View style={styles.line}></View>

            <TouchableOpacity onPress={() => {navigation.navigate('Temperature')}}>
                <View style={styles.optionContainer}>
                    <IconFA name="temperature-high" size={24} color="#fff" style={{marginRight: 13}}/>
                    <Text style={styles.textContainer}>
                        TEMPERATURA
                    </Text>
                </View>
            </TouchableOpacity>

        </View>
    )
};

export default DrawerContent;