import  React from 'react';
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './src/screens/Login/login';
import Register from './src/screens/Register/register';
import Inicial from './src/screens/Inicial/inicial';
import Adicionar from './src/screens/Adicionar/adicionar';
import Editar from './src/screens/Editar/editar'

const Stack = createNativeStackNavigator();
export default function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
         <Stack.Screen 
         name="Login" 
         component={Login}
         options={{headerShown: false}}
         />
         <Stack.Screen 
         name="Register" 
         component={Register}
         options={{headerShown: false}}
         />       
         <Stack.Screen 
         name="Inicial" 
         component={Inicial}
         options={{headerShown: false}}
         />
        <Stack.Screen 
         name="Adicionar" 
         component={Adicionar}
         options={{headerShown: false}}
         /> 
        <Stack.Screen 
         name="Editar" 
         component={Editar}
         options={{headerShown: false}}
         /> 
      </Stack.Navigator> 
    </NavigationContainer>

  )
}