import {StyleSheet, Dimensions} from 'react-native';

const heightScreen = Dimensions.get('window').height;
const widthScreen = Dimensions.get('window').width;

const styles = StyleSheet.create({
  optionContainer: {
    height: heightScreen / 11,
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
    justifyContent: 'flex-start',
    height: heightScreen / 1,
  },
  line: {
    backgroundColor: '#424242',
    width: widthScreen / 2.1,
    height: 1,
    marginLeft: 4,
  },
  circle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  colors: {
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 15,
  },
});

export default styles;
