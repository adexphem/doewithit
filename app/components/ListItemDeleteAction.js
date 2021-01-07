import React from 'react';
import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons"

import color from '../config/colors'

function ListItemDeleteAction({handleDelete}) {
  return (
    <TouchableWithoutFeedback onPress={handleDelete}>
      <View style={styles.container}>
        <MaterialCommunityIcons name="trash-can" size={35} color={color.white}  />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.danger,
    width: 70,
    color: color.white,
    justifyContent: "center",
    alignItems: "center"
  }
})

export default ListItemDeleteAction;