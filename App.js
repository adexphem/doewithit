import React, { useEffect, useState } from "react";
import * as ImagePicker from 'expo-image-picker'
import Screen from "./app/components/Screen";
import ImageInput from "./app/components/ImageInput";
import ImageInputList from "./app/components/ImageInputList";


export default function App() {
  const [imageUris, setImageUris] = useState([])
  
  const handleAddImage = uri => {
    setImageUris([...imageUris, uri]);
  }

  const handleRemoveImage = uri => {
    setImageUris(imageUris.filter(imageUri => imageUri !== uri));
  }

  return (
    <Screen>
      <ImageInputList imageUris={imageUris} 
        onAddImage={handleAddImage}
        onRemoveImage={handleRemoveImage}
      />
    </Screen>
  );
}
