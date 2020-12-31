import React from 'react'
import { Text, StyleSheet, Platform } from 'react-native'

const AppText = ({children}) => {
  return (
    <Text style={styles.text}>{children}</Text>
  )
}

const styles = StyleSheet.create({
  text: {
    color: "tomato",
    ...Platform.select({
      ios: {
        fontSize: 20,
        fontFamily: "Avenir",
      },
      android: {
        fontSize: 25,
        fontFamily: "Roboto",
      }
    }),
  }
})

export default AppText