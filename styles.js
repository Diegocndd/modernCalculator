import {StyleSheet, Dimensions} from 'react-native';

const widthScreen = Dimensions.get('window').width;

const styles = StyleSheet.create({
  drawerStyle: {
    backgroundColor: '#212121',
    padding: 20,
    paddingVertical: 50,
    width: (widthScreen * 80) / 100,
  },
});

export default styles;
