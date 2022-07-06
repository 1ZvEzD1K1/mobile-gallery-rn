import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const Post = ({ url, desc, author, handleNavigation }) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={handleNavigation}
    >
      <Image source={{ uri: url }} style={styles.img} />
      <View style={styles.text}>
        <Text style={styles.author}>{author}</Text>
        <Text>{desc}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 10,
    elevation: 4,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: "100%",
    height: 300,
  },
  text: {
    paddingBottom: 10,
    paddingLeft: 5,
    paddingRight: 5,
    paddingTop: 10,
    color: "#000"
  },
  author: {
    fontWeight: 'bold',
    fontStyle: 'italic',
    fontSize: 20,
  }
});

export default Post