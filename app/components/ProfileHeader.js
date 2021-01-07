import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

import AppText from './AppText';
import colors from '../config/colors';

function ProfileHeader({title, subTitle, image, style}) {
  return (
    <View style={[styles.container, style]}>
      <Image source={image} style={styles.image} />
      <View>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subTitle}>{subTitle}</AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 15,
    alignItems: "center"
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 10
  },
  subTitle: {
    fontSize: 18,
    fontWeight: "400",
    color: colors.medium
  },
  title: {
    fontSize: 20,
    fontWeight: "600"
  },
})

export default ProfileHeader;