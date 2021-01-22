import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import ListingScreen from '../screens/ListingScreen';
import ListingEditScreen from '../screens/ListingEditScreen';
import MyAccountScreen from '../screens/AccountScreen';

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Listings" component={ListingScreen} />
      <Tab.Screen name="ListingEdit" component={ListingEditScreen} />
      <Tab.Screen name="Account" component={MyAccountScreen} />
    </Tab.Navigator>
  )
}

export default AppNavigator