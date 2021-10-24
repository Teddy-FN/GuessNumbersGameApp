import { StyleSheet } from 'react-native'
import { Color, Fonts } from '../Utils/constant'
const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 90,
    paddingTop: 36,
    backgroundColor: Color.COLOR_PRIMARY,
    alignItems: 'center',
    justifyContent: 'center'
  },
  headerTitle : {
    color: Color.BLACK_COLOR,
    fontSize: 18,
    fontFamily: Fonts.openSansReguler
  }
})

export default styles