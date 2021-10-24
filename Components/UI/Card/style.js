import { StyleSheet } from "react-native";
import { Color } from "../../Utils/constant";
const styles = StyleSheet.create({
  cardContainer: {
    width: 300,
    maxWidth: '80%',
    alignItems: 'center',
    shadowOffset: {
      width: 0, height: 2
    },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    backgroundColor: Color.WHITE_COLOR,
    padding: 20
  }
})

export default styles