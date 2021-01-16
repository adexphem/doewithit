import React from "react";
import { Text } from "react-native";
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'

import Screen from "./app/components/Screen";

export default function App() {
  const Tweets = () => (
    <Screen>
      <Text>Tweets</Text>
    </Screen>
  )

  const TweetDetails = () => (
    <Screen>
      <Text>Tweet Details</Text>
    </Screen>
  )
  
  const Stack = createStackNavigator();

  const StackNavigator = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Tweets" component={Tweets} />
        <Stack.Screen name="TweetDetails" component={TweetDetails} />
      </Stack.Navigator>
    )
  }

  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}
