import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Calculator from '../../pages/Calculator';
import Conversor from '../../pages/Conversor';

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
};

export default Menu;