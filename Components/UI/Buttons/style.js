import { StyleSheet } from 'react-native'
import { Color } from '../../Utils/constant'
const styles = StyleSheet.create({
  button: {
    backgroundColor: Color.COLOR_PRIMARY,
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25
  },
  buttonText: {
    color: 'white',
    fontFamily: 'open-sans',
    fontSize: 18,
  }
})

export default styles