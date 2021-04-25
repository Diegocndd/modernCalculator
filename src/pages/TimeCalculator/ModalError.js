import React from 'react';
import {View, Text, TouchableOpacity, Modal} from 'react-native';
import IconMCI from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './styles';

const ModalError = props => {
  const {close} = props;

  return (
    <View style={styles.modalContainer}>
      <Modal transparent={true}>
        <View style={styles.modalContainer2}>
          <View style={styles.info}>
            <IconMCI name="alert" size={50} color="red" />
            <View style={styles.containerText}>
              <Text style={styles.textError}>
                O primeiro tempo deve ser maior que o segundo
              </Text>
            </View>
          </View>
          <TouchableOpacity onPress={() => close()} style={styles.okButton}>
            <Text style={styles.textButton}>FECHAR</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

export default ModalError;
