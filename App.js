import React, { useEffect, useState } from "react";
import * as ImagePicker from 'expo-image-picker'
import * as Permissions from 'expo-permissions'
import { Button, Image } from "react-native";

import ListingEditScreen from "./app/screens/ListingEditScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import Screen from "./app/components/Screen";


export default function App() {
  const [imageUri, setImageUri] = useState()
  const requestPermission = async () => {
    const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if(!granted) {
      alert("Oops! You need to enable permission to access the library.")
    }
  }

  useEffect(() => {
    requestPermission();
  }, [])

  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync();
      if(!result.cancelled) {
        const { uri } = result;
        setImageUri(uri)
      }
    } catch (error) {
      console.log("Could not fetch image ", error)
    }
  }

  return (
    <Screen>
      <Button title="Select Image" onPress={selectImage} />
      <Image source={{uri: imageUri}} style={{width: 200, height: 200}} />
    </Screen>
  );
}
