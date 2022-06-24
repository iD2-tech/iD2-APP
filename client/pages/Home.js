import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import React from 'react'
import {auth} from '../../firebase'

const Home = () => {
  
  const navigation= useNavigation();

  const logOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace("Login")
      })
      .catch(error => alert(error.message))
  }

  return (
    <View>
      <Text>Email: {auth.currentUser?.email}</Text>
      <TouchableOpacity
        onPress= {logOut}
      >
        <Text>Logout</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})