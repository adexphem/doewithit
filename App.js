import React from "react";
import { Button, Text } from "react-native";
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer, useNavigation } from '@react-navigation/native'

import Screen from "./app/components/Screen";

export default function App() {
  const Link = ({link}) => {
    const navigation = useNavigation();
    
    return (
      <Button 
        title="Click"
        onPress={() => navigation.navigate(link)}
      />
    )
  }

  const Tweets = () => (
    <Screen>
      <Text>Tweets</Text>
      <Link link="TweetDetails" />
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
