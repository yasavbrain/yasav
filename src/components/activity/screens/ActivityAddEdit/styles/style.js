import { StyleSheet } from 'react-native';
import Colors from 'yasav/src/styles/Colors';

export default StyleSheet.create({
  textarea: {
    textAlignVertical: 'top',
    // height: 150,
    marginTop: 5,
    marginBottom: 10,
  },
  addTodoButton: {
    backgroundColor: Colors.primary,
    marginTop: 20,
    marginBottom: 210,
  },
  tagFromListItem: {
    height: 40,
    backgroundColor: '#E1E6ED',
    borderTopWidth: 0,
    borderBottomWidth: 0,
    borderColor: '#AAAAAA',
    marginTop: 5,
    marginRight: 0,
    marginLeft: 0,
    paddingLeft: 15,
  },
  tagFromListText: {
    fontSize: 17,
    fontWeight: 'bold',
  }
});

