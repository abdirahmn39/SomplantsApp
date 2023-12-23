import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from "./Login";
import HomeScreen from './HomeScreen';
import DetailsScreen from './DetailsScreen';
import 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Products from './Products';
const Stack = createStackNavigator();
const Navigation = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen name="Login" component={Login}/>
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="Products" component={Products}  />
    <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  </NavigationContainer>
  );
};
export default Navigation;