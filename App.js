import React, { useEffect } from "react";
import * as ImagePicker from 'expo-image-picker'

import ListingEditScreen from "./app/screens/ListingEditScreen";
import MessagesScreen from "./app/screens/MessagesScreen";

export default function App() {
  const requestPermission = async () => {
    const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if(!granted) {
      alert("Oops! You need to enable permission to access the library.")
    }
  }
  useEffect(() => {
    requestPermission();
  }, [])
  return (
    <ListingEditScreen />
  );
}
