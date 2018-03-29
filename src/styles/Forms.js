import { StyleSheet } from 'react-native';
import Colors from './Colors';

export default StyleSheet.create({
  inputWrapper: {
    borderBottomWidth: 1,
    borderColor: Colors.focused,
    marginRight: 15,
  },
  inputWrapperSelected: {
    borderColor: Colors.primary,
    borderBottomWidth: 2,
    marginRight: 15,
  },
  inputWrapperLight: {
    borderBottomWidth: 0,
  },
});
