import { StyleSheet } from 'react-native';
import Colors from './Colors';

export default StyleSheet.create({
  simpleHeader: {
    backgroundColor: Colors.header.background,
    borderBottomWidth: 0,
  },
  hiddenHeader: {
    height: 0,
  },
});
