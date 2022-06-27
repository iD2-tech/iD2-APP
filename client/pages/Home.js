import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { auth } from '../../firebase'

const Home = () => {

  const navigation = useNavigation();


  // Button Functions

  // navigates to login page
  // logs out user
  const logOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace("Login")
      })
      .catch(error => alert(error.message))
  }

  // navigates to profile feed page
  const navToFeed = () => {
    navigation.navigate("Feed");
  }

  // navigates to posting camera page
  const navToCamera = () => {
    navigation.navigate("Camera");
  }

  // navigates to filter page
  const navToFilter = () => {
    navigation.navigate("Filter");
  }

  return (
    <View>
      <Text>Email: {auth.currentUser?.email}</Text>

      <TouchableOpacity
        onPress={logOut}
      >
        <Text>Logout</Text>
      </TouchableOpacity>
      
      <TouchableOpacity
        onPress={navToFeed}
      >
        <Text>Feed</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={navToCamera}
      >
        <Text>Camera</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={navToFilter}
      >
        <Text>Filter</Text>
      </TouchableOpacity>

    </View>
  )
}

export default Home

const styles = StyleSheet.create({})