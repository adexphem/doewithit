import React, { useState } from "react";
import { View, Text, Button, TextInput } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons"

import ViewImageScreen from "./app/screens/ViewImageScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import AppText from './app/components/AppText';
import AppButton from './app/components/AppButton'
import Card from './app/components/Card'
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import AccountScreen from "./app/screens/AccountScreen";
import ListingScreen from "./app/screens/ListingScreen";
import Screen from "./app/components/Screen";

export default function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Screen>
      <TextInput
        onChangeText={text => setUsername(text)}
        placeholder={'Enter Your Username'} 
        style={{
          borderBottomColor: "#ccc",
          borderWidth: 1
        }} 
      />
      <TextInput
        secureTextEntry
        onChangeText={text => setPassword(text)}
        placeholder={'Enter Your Password'} 
        style={{
          borderBottomColor: "#ccc",
          borderWidth: 1
        }} 
      />
      <Text>{`Username: ${username}`}</Text>
      <Text>{`Password: ${password}`}</Text>
    </Screen>
  );
}
