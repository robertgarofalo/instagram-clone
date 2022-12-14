import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import HomeScreen from './HomeScreen'
import NewPostScreen from './NewPostScreen'
import SignupScreen from './SignupScreen'
import LoginScreen from './LoginScreen'

const Stack = createStackNavigator()

const screenOptions = {
    headerShown: false
}

export const SignedInStack = () => (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home' screenOptions={screenOptions}>
        <Stack.Screen name='Home' component={HomeScreen} />
        <Stack.Screen name='NewPostScreen' component={NewPostScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )

export const SignedOutStack = () => (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='LoginScreen' screenOptions={screenOptions}>
        <Stack.Screen name='SignupScreen' component={SignupScreen} />
        <Stack.Screen name='LoginScreen' component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
