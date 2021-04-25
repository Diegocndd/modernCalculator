import React, {useState} from 'react';
import {View, TouchableOpacity} from 'react-native';
import Menu from '../Menu';
import {DrawerActions, useNavigation} from '@react-navigation/native';
import IconMCI from 'react-native-vector-icons/MaterialCommunityIcons';
import IconI from 'react-native-vector-icons/Ionicons';
import styles from './styles';

const Header = () => {
  const navigation = useNavigation();
  const [viewModal, setViewModal] = useState(false);

  return (
    <View style={styles.headerContainer}>
      {viewModal ? <Menu /> : null}

      <TouchableOpacity
        onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
        <IconMCI name="menu" size={30} color="#fff" />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
        <IconI name="settings-sharp" size={29} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
