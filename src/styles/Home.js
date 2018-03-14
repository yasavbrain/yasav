import { StyleSheet } from 'react-native';
import Colors from './Colors';

export default StyleSheet.create({
  activityButtons: {
    padding: 0,
    margin: 0,
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  activityMeetButton: {
    backgroundColor: Colors.meet,
    width: '50%',
    height: '65%',
  },
  activityEventButton: {
    backgroundColor: Colors.event,
    width: '50%',
    height: '65%',

  },
  activityContentButton: {
    backgroundColor: Colors.content,
    width: '100%',
    height: '35%',
  },
  activityButtonWrapper: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  icon: {
    color: 'white',
    fontSize: 80,
    textAlign: 'center',
  },
  text: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
    padding: 10,
  },
  spinner: {
    color: Colors.primary,
  },
});

