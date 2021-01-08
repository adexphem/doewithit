import React from 'react';
import { View } from 'react-native';

function Icon({
  iconColor = "#fff", 
  name, 
  size = 40, 
  backgrounColor = "#000"
}) {
  return (
    <View style={{
      width: size,
      height: size,
      borderRadius: size / 2,
      backgroundColor: backgrounColor,
      alignItems: "center",
      justifyContent: "center"
    }}>
      <MaterialCommunityIcons 
        name={name} 
        size={size * 0.5} 
        color={iconColor} 
      />
    </View>
  );
}

export default Icon;