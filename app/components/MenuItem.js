import React from 'react';
import { View, StyleSheet, TouchableHighlight } from 'react-native';

import Icon from './Icon';
import AppText from './AppText';
import colors from '../config/colors'

function MenuItem({onPress, iconName, textTitle, iconBgColor}) {
  return (
    <TouchableHighlight onPress={onPress}>
      <View style={styles.container}>
        <Icon name={iconName} backgroundColor={iconBgColor} size={35} iconColor="white" />
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
    padding: 15,
    marginBottom: 1
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