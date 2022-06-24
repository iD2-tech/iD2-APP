import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, sendEmailVerification } from '@firebase/auth';
import React, { useState, useEffect } from 'react'
import {auth} from '../../../firebase';
import { useNavigation } from '@react-navigation/native'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigation= useNavigation();

  useEffect(() =>{
    auth.onAuthStateChanged(user => {
        if (user) {
            navigation.replace("Home");
        }
    })
  }, [])

  const navToHome = async () => {
    try {
        const user = await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
        alert("Wrong email or password.")
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
      <TouchableOpacity
        onPress= {navToHome}
      >
        <Text>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress= {navBack}
      >
        <Text>Back</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({})