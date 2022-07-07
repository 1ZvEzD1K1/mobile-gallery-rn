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
                {images && images.map(({urls,description, id, user}) => {
                    return <Post 
                    url={urls.full} 
                    desc = {description}
                    key={id}
                    author={user.name}
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
