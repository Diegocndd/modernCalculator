import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import Menu from '../Menu';

import IconMCI from 'react-native-vector-icons/MaterialCommunityIcons';
import IconI from 'react-native-vector-icons/Ionicons';


import styles from './styles';

const Header = () => {

    const [viewModal, setViewModal] = useState(false);

    return (
    <View style={styles.headerContainer}>

        {viewModal ? 
            <Menu/>
        : null}

        <TouchableOpacity onPress={() => setViewModal(true)}>
            <IconMCI name="menu" size={30} color="#fff" />
        </TouchableOpacity>

        <TouchableOpacity>
            <IconI name="settings-sharp" size={29} color="#fff" />
        </TouchableOpacity>
    </View>
    )
};

export default Header;