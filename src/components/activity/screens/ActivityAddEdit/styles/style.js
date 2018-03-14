import { StyleSheet } from 'react-native';
import Colors from 'yasav/src/styles/Colors';

export default StyleSheet.create({
  textarea: {
    textAlignVertical: 'top',
    height: 200,
    marginTop: 5,
    marginBottom: 10,
  },
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

