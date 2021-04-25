import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Dimensions} from 'react-native';
import IconI from 'react-native-vector-icons/Ionicons';
import IconFA from 'react-native-vector-icons/FontAwesome5';
import LinearGradient from 'react-native-linear-gradient';
import {colors} from '../../constants/themes';
import {set_theme} from '../../store/ducks/themes';
import {useDispatch} from 'react-redux';
import styles from './styles';

const heightScreen = Dimensions.get('window').height;

const DrawerContent = ({navigation}) => {
  const [selectedColor, setSelectedColor] = useState(0);
  const dispatch = useDispatch();
  const setColor = id => {
    setSelectedColor(id);

    switch (id) {
      case 0:
        dispatch(set_theme(colors.base1, colors.base2));
        break;
      case 1:
        dispatch(set_theme(colors.purple1, colors.purple2));
        break;
      case 2:
        dispatch(set_theme(colors.sun1, colors.sun2));
        break;
      case 3:
        dispatch(set_theme(colors.brown1, colors.brown2));
        break;
      case 4:
        dispatch(set_theme(colors.beach1, colors.beach2));
        break;
      case 5:
        dispatch(set_theme(colors.red1, colors.red2));
        break;
      case 6:
        dispatch(set_theme(colors.orange1, colors.orange2));
        break;
      case 7:
        dispatch(set_theme(colors.pink1, colors.pink2));
        break;
      default:
        break;
    }
  };

  return (
    <View style={styles.drawerContainer}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Calculator');
        }}>
        <View style={styles.optionContainer}>
          <IconFA
            name="calculator"
            size={24}
            color="#fff"
            style={{marginRight: 10}}
          />
          <Text style={styles.textContainer}>CALCULADORA</Text>
        </View>
      </TouchableOpacity>

      <View style={styles.line} />

      <TouchableOpacity onPress={() => navigation.navigate('Conversor')}>
        <View style={styles.optionContainer}>
          <IconFA
            name="exchange-alt"
            size={24}
            color="#fff"
            style={{marginRight: 10}}
          />
          <Text style={styles.textContainer}>CONVERSOR DE MEDIDAS</Text>
        </View>
      </TouchableOpacity>

      <View style={styles.line} />

      <TouchableOpacity onPress={() => navigation.navigate('TimeCalculator')}>
        <View style={styles.optionContainer}>
          <IconI name="time" size={24} color="#fff" style={{marginRight: 10}} />
          <Text style={styles.textContainer}>CALCULADORA DE TEMPO</Text>
        </View>
      </TouchableOpacity>

      <View style={styles.line} />

      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Percentage');
        }}>
        <View style={styles.optionContainer}>
          <IconFA
            name="percentage"
            size={24}
            color="#fff"
            style={{marginRight: 18}}
          />
          <Text style={styles.textContainer}>PORCENTAGEM</Text>
        </View>
      </TouchableOpacity>

      <View style={styles.line} />

      <View
        style={{
          height: heightScreen / 3,
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
          flexDirection: 'column',
          padding: 4,
        }}>
        <Text style={[styles.textContainer, {marginTop: 20, marginBottom: 40}]}>
          PREFERÊNCIAS
        </Text>
        <View>
          <View style={styles.colors}>
            <TouchableOpacity onPress={() => setColor(0)}>
              <LinearGradient
                colors={['#C06C84', '#a044ff']}
                style={styles.circle}>
                {selectedColor === 0 ? (
                  <IconFA name="check" color="#fff" size={20} />
                ) : null}
              </LinearGradient>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => setColor(1)}>
              <LinearGradient
                colors={['#6a3093', '#a044ff']}
                style={styles.circle}>
                {selectedColor === 1 ? (
                  <IconFA name="check" color="#fff" size={20} />
                ) : null}
              </LinearGradient>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => setColor(2)}>
              <LinearGradient
                colors={['#C02425', '#F0CB35']}
                style={styles.circle}>
                {selectedColor === 2 ? (
                  <IconFA name="check" color="#fff" size={20} />
                ) : null}
              </LinearGradient>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => setColor(3)}>
              <LinearGradient
                colors={['#BE5869', '#403A3E']}
                style={styles.circle}>
                {selectedColor === 3 ? (
                  <IconFA name="check" color="#fff" size={20} />
                ) : null}
              </LinearGradient>
            </TouchableOpacity>
          </View>

          <View style={styles.colors}>
            <TouchableOpacity onPress={() => setColor(4)}>
              <LinearGradient
                colors={['#c2e59c', '#64b3f4']}
                style={styles.circle}>
                {selectedColor === 4 ? (
                  <IconFA name="check" color="#fff" size={20} />
                ) : null}
              </LinearGradient>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => setColor(5)}>
              <LinearGradient
                colors={['#8E0E00', '#1F1C18']}
                style={styles.circle}>
                {selectedColor === 5 ? (
                  <IconFA name="check" color="#fff" size={20} />
                ) : null}
              </LinearGradient>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => setColor(6)}>
              <LinearGradient
                colors={['#ED8F03', '#FFB75E']}
                style={styles.circle}>
                {selectedColor === 6 ? (
                  <IconFA name="check" color="#fff" size={20} />
                ) : null}
              </LinearGradient>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => setColor(7)}>
              <LinearGradient
                colors={['#fc00ff', '#00dbde']}
                style={styles.circle}>
                {selectedColor === 7 ? (
                  <IconFA name="check" color="#fff" size={20} />
                ) : null}
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default DrawerContent;
