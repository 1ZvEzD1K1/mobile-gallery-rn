import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Home from './screens/Home';
import Images from './screens/Images';

const MainNavigator = () => {

  const Stack = createNativeStackNavigator()

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={Home}/>
        <Stack.Screen name='Images' component={Images} options={({route})=>{
          return {title: route.params.img.user.name,}
        }}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default MainNavigator