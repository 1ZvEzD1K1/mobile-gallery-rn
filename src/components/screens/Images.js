import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

const Images = (props) => {

    const url = props.route.params.img.urls.full;

    return (
        <View style={styles.container}>
            <Image source={{uri: url}} style={styles.img}></Image>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    img: {
        width: "100%",
        height: "100%",
    }
  });

export default Images