import React, { useEffect } from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { ImagesActionCreators } from '../../redux/images/action-images'
import Error from '../../components/Error'
import Loader from '../../components/Loader'
import Post from '../../components/Post'

const Home = (props) => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(ImagesActionCreators.getImages())
    }, [])

    const {images, error, isLoading} = useSelector(state => state.imagesReducer)

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