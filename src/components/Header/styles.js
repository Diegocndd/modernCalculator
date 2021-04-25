import {StyleSheet, Dimensions} from 'react-native';

const heightScreen = Dimensions.get('window').height;

const styles = StyleSheet.create({
  headerContainer: {
    height: 0.1 * heightScreen,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
});

export default styles;
