import React from "react";
import { Button, Text } from "react-native";
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer, useNavigation } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { MaterialCommunityIcons } from '@expo/vector-icons'

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
        onPress={() => navigation.navigate("TweetDetails", {id: 9, title: "Tacos List"})}
      />
    </Screen>
  )

  const TweetDetails = ({ route }) => (
    <Screen>
      <Text>Tweet Details {route.params.id}</Text>
    </Screen>
  )

  const Account = () => (
    <Screen>
      <Text>Account</Text>
    </Screen>
  )
  
  const Stack = createStackNavigator();
  const Tab = createBottomTabNavigator();

  const TabNavigator = () => {
    return (
      <Tab.Navigator
        tabBarOptions={{
          activeBackgroundColor: "tomato",
          activeTintColor: "white",
          inactiveBackgroundColor: "#eee",
          inactiveTintColor: "black"
        }}
      >
        <Tab.Screen 
          name="Feed" 
          component={Tweets}
          options={{
            tabBarIcon: ({size, color}) => <MaterialCommunityIcons name="home" size={size} color={color}/>
          }} 
        />
        <Tab.Screen 
          name="Account" 
          component={Account}
          options={{
            tabBarIcon: ({size, color}) => <MaterialCommunityIcons name="home" size={size} color={color}/>
          }} 
        />
        <Tab.Screen 
          name="Settings" 
          component={Account}
          options={{
            tabBarIcon: ({size, color}) => <MaterialCommunityIcons name="account-settings" size={size} color={color}/>
          }} 
        />
      </Tab.Navigator>
    )
  }

  const StackNavigator = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Tweets" component={Tweets} />
        <Stack.Screen 
          name="TweetDetails" 
          component={TweetDetails}
          options={{
            headerStyle: {
              backgroundColor: "tomato"
            },
            headerTintColor: "white"
          }}
        />
      </Stack.Navigator>
    )
  }

  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
}
