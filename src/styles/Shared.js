import { StyleSheet } from 'react-native'
import Colors from './Colors'


export default StyleSheet.create({
  radioBlockSelected: { 
    marginLeft: 0, 
    backgroundColor: Colors.selected, 
    paddingRight: 0
  },
  radioBlockUnselected: { 
    marginLeft: 0, 
    backgroundColor: Colors.unselected, 
    paddingRight: 0 
  },
  radioBlockText: { 
    flex:1, 
    textAlign: 'center'
  },
})