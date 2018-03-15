import { StyleSheet } from 'react-native';
import Colors from 'yasav/src/styles/Colors';

export default StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
  },
  content: {
    margin: 20,
  },
  addTodoButton: {
    color: Colors.disabled
  },
  addTodoButtonValid: {
    color: Colors.darkActive,
  },
  addTodoButtonInvalid: {
    color: Colors.darkInactive,
  },
  addForm: {
    borderBottomWidth: 0,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.inactive,
  },
  todoText: {
    marginLeft: 10,
  },
  todoTextDone: {
    textDecorationLine: 'line-through', 
  },
  checkbox: {
    borderColor: Colors.focused,
  },
  checkboxSelected: {
    backgroundColor: Colors.focused,
  },
  checkboxUnselected: {
    backgroundColor: Colors.background,
  }
});
