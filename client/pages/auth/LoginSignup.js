import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import React from 'react'

const LoginSignup = () => {
  
  const navigation= useNavigation();

  const navToLogin = () => {
    navigation.navigate("Login");
  }

  const navToSignUp = () => {
    navigation.navigate("Signup");
  }


  return (
    <View>
      <TouchableOpacity
        onPress = {navToLogin}
      >
        <Text>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress = {navToSignUp}
      >
        <Text>Signup</Text>
      </TouchableOpacity>
    </View>
  )
}

export default LoginSignup

const styles = StyleSheet.create({})