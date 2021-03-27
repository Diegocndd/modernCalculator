import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Modal, DrawerLayoutAndroid} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Calculator from '../../pages/Calculator';
import Conversor from '../../pages/Conversor';

import IconI from 'react-native-vector-icons/Ionicons';
import IconFA from 'react-native-vector-icons/FontAwesome5';

import styles from './styles';

const Menu = () => {

    const Drawer = createDrawerNavigator();

    return (
        <NavigationContainer>
            <Drawer.Navigator 
              initialRouteName="Calculator"
              drawerStyle = {{
                  backgroundColor: '#313131',
                  paddingVertical: 20,
              }} 
            >
                <Drawer.Screen name="Calculator" component={Calculator} />
                <Drawer.Screen name="Conversor" component={Conversor} />
            </Drawer.Navigator>
        </NavigationContainer>
    )

  /*return (
    <Modal transparent>
        <View style={styles.modal}>
            <View style={styles.containerModal}>

                <View>
                    <Text style={styles.titleMenu}>MENU</Text>
                </View>

                <View>
                    <View style={styles.option}>
                        <IconFA name="calculator" size={35} color="#fff" style={{marginLeft: 30}}/>
                        <Text style={styles.textOptions}>CALCULADORA COMUM</Text>
                    </View>
                    <View style={styles.option}>
                        <IconFA name="exchange-alt" size={35} color="#fff" style={{marginLeft: 30}}/>
                        <Text style={styles.textOptions}>CONVERSOR DE MEDIDAS</Text>
                    </View>
                    <View style={styles.option}>
                        <IconI name="time" size={35} color="#fff" style={{marginLeft: 30}}/>
                        <Text style={styles.textOptions}>CALCULADORA DE TEMPO</Text>
                    </View>
                    <View style={styles.option}>
                        <IconFA name="percentage" size={35} color="#fff" style={{marginLeft: 30}}/>
                        <Text style={styles.textOptions}>PORCENTAGEM</Text>
                    </View>
                    <View style={styles.option}>
                        <IconFA name="temperature-high" size={35} color="#fff" style={{marginLeft: 30}}/>
                        <Text style={styles.textOptions}>TEMPERATURA</Text>
                    </View>
                </View>

            </View>
        </View>
    </Modal>
  )*/
};

export default Menu;