import React from 'react';

import { 
  PageCalculator, 
  PageConversor, 
  PageTimeCalculator, 
  PagePercentage, 
} from './src/pages';

import DrawerContent from './src/components/Drawer';

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import styles from './styles';

const App = () => {

  const Drawer = createDrawerNavigator();

  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Calculator"
        drawerStyle={styles.drawerStyle}
        drawerContent = { props => <DrawerContent {...props} />}
      >
        <Drawer.Screen name="Calculator" component={PageCalculator}/>
        <Drawer.Screen name="Conversor" component={PageConversor}/>
        <Drawer.Screen name="TimeCalculator" component={PageTimeCalculator}/>
        <Drawer.Screen name="Percentage" component={PagePercentage}/>
      </Drawer.Navigator>
    </NavigationContainer>
  )

};

export default App;
