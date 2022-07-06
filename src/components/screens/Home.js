import React, { useEffect } from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { ImagesActionCreators } from '../../redux/images/action-images'
import Error from '../Error'
import Loader from '../Loader'
import Post from '../Post'

const Home = (props) => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(ImagesActionCreators.getImages())
    }, [])

    const {images, error, isLoading} = useSelector(state => state.imagesReducer)
    //console.log("img", images)

    const handleNavigation = (img) => {
        props.navigation.navigate("Images", {img: img})
    }

    if (isLoading) {
        return <Loader/>
    }

    if (error !== "") {
        return <Error message={error}/>
    }

    return (
        <View style={styles.container}>
            <ScrollView style={styles.scroll}>
                {images && images.map((image) => {
                    // console.log("url", image.urls.full)
                    // console.log("desc", image.description)
                    // console.log("id", image.id)
                    // console.log("author", image.user.name)
                    return <Post 
                    url={image.urls.full} 
                    desc = {image.description}
                    key={image.id}
                    author={image.user.name}
                    handleNavigation={() => handleNavigation(image)}
                    />
                })}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    scroll: {
        width: "100%",
    },
  });

export default Home