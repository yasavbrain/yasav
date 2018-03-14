import { StyleSheet } from 'react-native';
import Colors from './Colors';

export default StyleSheet.create({
  simpleHeader: {
    backgroundColor: Colors.header.background,
    borderBottomWidth: 0,
  },
  headerTitle: {
    color: Colors.header.active,
  },
  genericHeader: {
    backgroundColor: Colors.header.background,
  },
  menuHeader: {
    backgroundColor: Colors.header.background,
  },
  menuHeaderRight: {
    flex: 1,
  },
  saveButtonRight: {
    alignSelf: 'flex-end',
    backgroundColor: 'transparent',
  },
  saveButtonRightValid: {
    color: Colors.enabled,
  },
  saveButtonRightInvalid: {
    color: Colors.disabled,
  },
});
