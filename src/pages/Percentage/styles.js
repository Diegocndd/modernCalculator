import {StyleSheet, Dimensions} from 'react-native';

const heightScreen = Dimensions.get('window').height;
const widthScreen = Dimensions.get('window').width;

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'space-around',
    height: 0.9 * heightScreen,
    paddingHorizontal: 40,
  },
  phrase: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    fontSize: 25,
    backgroundColor: '#fff',
    maxWidth: widthScreen / 5,
    minWidth: widthScreen / 6,
    textAlign: 'center',
  },
  commonText: {
    fontSize: 25,
    color: '#fff',
  },
});

export default styles;
