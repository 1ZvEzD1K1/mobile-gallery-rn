import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Error = ({message}) => {
  return (
    <View style={styles.container}>
        <Text>{message}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

export default Error