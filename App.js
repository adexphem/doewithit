import React from "react";
import { View, Text, Button } from "react-native";
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

export default function App() {
  return (
    <ListingScreen />
  );
}
