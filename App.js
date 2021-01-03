import React from "react";
import { View, Text, Button } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons"

import ViewImageScreen from "./app/screens/ViewImageScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import AppText from './app/components/AppText';
import AppButton from './app/components/AppButton'
import Card from './app/components/Card'

export default function App() {
  return (
    <View style={{
      backgroundColor: "#fbf4f4",
      padding: 20,
      paddingTop: 50
    }}>
      <Card 
        title="Red jacket for sale!"
        subTitle="$100"
        image={require("./app/assets/jacket.jpg")}
      />
    </View>
  );
}
