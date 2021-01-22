import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'

import colors from '../config/colors';

function NewListingButton({onPress, isFocused}) {
  const focusedStyle = isFocused ? {
    backgroundColor: colors.primary
  } : {
    backgroundColor: colors.grey
  };

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.container, focusedStyle]}>
        <MaterialCommunityIcons 
          name="plus-circle" 
          size={40} 
          color={colors.white} 
        />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    borderColor: colors.white,
    borderWidth: 10,
    borderRadius: 40,
    bottom: 25,
    height: 80,
    justifyContent: "center",
    width: 80,
  }
})

export default NewListingButton;