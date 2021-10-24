import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import styles from './style'

const Header = props => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>{props.title}</Text>
    </View>
  )
}

export default Header