import React from 'react'
import { TextInput } from 'react-native'
import styles from './style'

const Textinput = props => {
  return <TextInput 
    {...props}
    style={{
      ...styles.input,
      ...props.style
    }}
  />
}

export default Textinput

