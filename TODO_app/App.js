
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {useState} from "react";
import {Image, Pressable, SafeAreaView, Text, TextInput, View} from "react-native";
import {styles} from "./Styles/Styles";
import Username_Icon from "./assets/Username_Icon.png";
import Password_Icon from "./assets/Password_Icon.png";
import {StatusBar} from "expo-status-bar";
import RootStack from "./Rootstack";


export default function App() {
  return(RootStack());
}


