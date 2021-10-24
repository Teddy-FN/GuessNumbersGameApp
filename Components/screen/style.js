import { StyleSheet } from 'react-native'
import { Color, Fonts } from '../Utils/constant'
const styles = StyleSheet.create({
   screen : {
     flex: 1,
     padding: 10,
     alignItems: 'center',
     justifyContent: 'flex-start'
   },
   title: {
    fontSize: 30,
    marginVertical: 10,
    fontFamily: Fonts.openSansBold
   },
   inputContainer: {
    width: 300,
    maxWidth: '80%',
    alignItems: 'center',
   },
   buttonContainer: {
      flexDirection: 'row',
      width: '100%',
      justifyContent: 'space-between',
      paddingHorizontal: 15
   },
   button: {
     width: 100
   },
   input: {
     width: 'auto', 
     textAlign: 'center'
   },
   summaryContainer : {
     marginTop: 20
   },
   texts: {
     fontFamily: Fonts.openSansBold
   },


  //  GAMES SCREEN
  screenGames : {
    flex: 1,
    padding: 10,
    alignItems: 'center',
  },

  buttonContainerGameScreen: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
    width: 450, 
    maxWidth: '95%'    
  },
  listItems: {
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 15,
    marginVertical: 10,
    backgroundColor: Color.WHITE_COLOR,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%'
  },
  listContainer: {
    flex: 1,
    width: '80%',
  },
  list: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'flex-end'
  },


  // GAME OVER SCREEN
  screenGameOver: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    width: '100%',
    height: '100%',
  },
  containerImages: {
    width: 300,
    overflow: 'hidden',
    borderRadius: 150,
    borderWidth: 3, 
    borderColor: '#000',
    height: 300,
    marginVertical: 30,
  },
  resultContainer: {
    marginHorizontal: 30,
    marginVertical: 15,
  },
})
export default styles
