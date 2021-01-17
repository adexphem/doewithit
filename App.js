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

  const Tweets = ({ navigation }) => (
    <Screen>
      <Text>Tweets</Text>
      <Button 
        title="View Tweet"
        onPress={() => navigation.navigate("TweetDetails", {id: 9})}
      />
    </Screen>
  )

  const TweetDetails = ({ route }) => (
    <Screen>
      <Text>Tweet Details {route.params.id}</Text>
    </Screen>
  )
  
  const Stack = createStackNavigator();

  const StackNavigator = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Tweets" component={Tweets} />
        <Stack.Screen 
          name="TweetDetails" 
          component={TweetDetails}
          options={{title: "Changed Title"}}
        />
      </Stack.Navigator>
    )
  }

  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}
