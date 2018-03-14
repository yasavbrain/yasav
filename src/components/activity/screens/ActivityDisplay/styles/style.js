import { StyleSheet } from 'react-native';
import Colors from 'yasav/src/styles/Colors';

export default StyleSheet.create({
  container: {
    marginTop: 10,
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 10,
  },
  title: {
    fontSize: 17,
    marginBottom: 10,
  },
  description: {
    fontSize: 12,
    marginBottom: 20,
  },
  date: {
    marginTop: 10,
    fontSize: 10,
    textAlign: 'right',
    marginBottom: -20,
  },
  buttonContainer: {
    backgroundColor: 'red',
    margin: 0,
    padding: 0,

  },
  deleteButton: {
    backgroundColor: Colors.error,
    borderRadius: 0,
  },
  buttonText: {
    color: '#FFFFFF',
  },
  editButton: {
    backgroundColor: Colors.primary,
    borderRadius: 0,
  }
});

