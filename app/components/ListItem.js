import React from 'react';
import { View, StyleSheet, Image, TouchableHighlight } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { MaterialCommunityIcons } from '@expo/vector-icons'

import AppText from './AppText';
import colors from '../config/colors';

function ListItem({title, IconComponent, subTitle, image, onPress, swipeActions}) {
  return (
    <Swipeable renderRightActions={swipeActions}>
      <TouchableHighlight onPress={onPress} underlayColor={colors.light} >
        <View style={styles.container}>
          {IconComponent}
          {image && <Image source={image} style={styles.image} />}
          <View style={styles.detailsContainer}>
            <AppText style={styles.title} numberOfLines={1}>{title}</AppText>
            {subTitle && <AppText style={styles.subTitle} numberOfLines={2}>{subTitle}</AppText>}
          </View>
          <MaterialCommunityIcons color={colors.medium} name="chevron-right" size={25} />
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flexDirection: "row",
    padding: 15,
    backgroundColor: colors.white,
  },
  detailsContainer: {
    justifyContent: "center",
    marginLeft: 10,
    flex: 1
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
    fontWeight: "900"
  },
})

export default ListItem;