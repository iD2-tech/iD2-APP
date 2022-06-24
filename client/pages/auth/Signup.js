import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, sendEmailVerification } from '@firebase/auth';
import React, { useState } from 'react'
import {auth} from '../../../firebase';
import { useNavigation } from '@react-navigation/native'

const Signup = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigation= useNavigation();

  const navToHome = async () => {
    if (!(password === confirmPassword)) {
        alert("Passwords do not match!");
      } else {
          try {
              const user = await createUserWithEmailAndPassword(auth, email, password);
              navigation.navigate("Home");
          } catch (error) {
              console.log(error)
              alert("Please make sure all fields are inputted correctly")
          }
      }
  }

  const navBack= () => {
    navigation.navigate("LoginSignup");
  }

  return (
    <View>
       <TextInput
          placeholder="Email"
          value={email}
          onChangeText={text => setEmail(text)}
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={text => setPassword(text)}
          secureTextEntry
        />
        <TextInput
          placeholder="Confirm Password"
          value={confirmPassword}
          onChangeText={text => setConfirmPassword(text)}
          secureTextEntry
        />
      <TouchableOpacity
        onPress = {navToHome}
      >
       <Text>SignUp</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress = {navBack}
      >
        <Text>Back</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Signup

const styles = StyleSheet.create({})