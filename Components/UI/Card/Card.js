import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import styles from './style'
const Card = props => {
  return <View style={
    {
      ...styles.cardContainer,
      ...props.style
    }
  }>{props.children}</View>
}

export default Card

