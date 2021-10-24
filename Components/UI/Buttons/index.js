import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import styles from './style'
const MainButton = props => {
  return (
    <TouchableOpacity onPress={props.onPress} activeOpacity={0.5}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>{props.children}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default MainButton


