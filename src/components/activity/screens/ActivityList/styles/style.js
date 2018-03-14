import { StyleSheet } from 'react-native';
import Colors from 'yasav/src/styles/Colors';

export default StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
  },
  list: {
    paddingRight: 0,
    paddingLeft: 0,
    marginLeft: 0,
  },
  listItemGeneric: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginLeft: 0,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
    borderBottomWidth: 0,
  },
  listItemEven: {
    backgroundColor: Colors.alternatedEven,
  }, 
  listItemOdd: {
    backgroundColor: Colors.alternatedOdd,
  },
  listItemTitle: {
    fontSize: 15,
  },
  listItemDescription: {
    fontSize: 12,
    paddingLeft: 10,
    paddingTop: 10,
  },
  addButton: {
    backgroundColor: Colors.primary,
  },
  addEventButton: {
    backgroundColor: Colors.event,
  },
  addMeetingButton: {
    backgroundColor: Colors.meet,
  },
  addContentButton: {
    backgroundColor: Colors.content,
  },
});

