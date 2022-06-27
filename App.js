import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Screen Imports
import LoginSignup from './client/pages/auth/LoginSignup';
import Login from './client/pages/auth/Login';
import Signup from './client/pages/auth/Signup';
import Home from './client/pages/Home';
import Camera from './client/pages/features/posting/Camera';
import DisplayPost from './client/pages/features/posting/DisplayPost';
import Publish from './client/pages/features/posting/Publish';
import Feed from './client/pages/features/profile/Feed';
import FriendAdd from './client/pages/features/profile/FriendAdd';
import Friends from './client/pages/features/profile/Friends';
import Filter from './client/pages/features/Filter';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
   <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="LoginSignup" component={LoginSignup} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Camera" component={Camera} />
        <Stack.Screen name="DisplayPost" component={DisplayPost} />
        <Stack.Screen name="Publish" component={Publish} />
        <Stack.Screen name="Feed" component={Feed} />
        <Stack.Screen name="FriendAdd" component={FriendAdd} />
        <Stack.Screen name="Friends" component={Friends} />
        <Stack.Screen name="Filter" component={Filter} />
      </Stack.Navigator>
   </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
