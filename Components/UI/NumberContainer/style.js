import { StyleSheet } from 'react-native'
import { Color } from '../../Utils/constant'
const styles = StyleSheet.create({
  container : {
    borderWidth: 2,
    borderColor: Color.COLOR_ACCENT,
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  number: {
    color: Color.COLOR_ACCENT,
    fontSize: 22,
    
  }
})

export default styles