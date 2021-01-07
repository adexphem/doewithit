import React from 'react';
import { View, StyleSheet, TouchableHighlight } from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppText from './AppText';
import colors from '../config/colors'

function MenuItem({onPress, iconName, textTitle, iconBgColor}) {
  return (
    <TouchableHighlight onPress={onPress}>
      <View style={styles.container}>
        <View style={[styles.icon, {backgroundColor: iconBgColor}]}>
          <MaterialCommunityIcons name={iconName} size={25} color="white"  />
        </View>
        <AppText style={styles.textColor}>{textTitle}</AppText>
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: "center",
    backgroundColor: "white",
    paddingVertical: 15
  },
  icon: {
    backgroundColor: colors.primary,
    height: 40,
    width: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 8
  },
  textColor: { 
    fontSize: 20, 
    color: colors.black 
  }
})

export default MenuItem;