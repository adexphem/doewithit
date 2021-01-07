import React from 'react';
import { View, StyleSheet, Image, TouchableHighlight } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';

import AppText from './AppText';
import colors from '../config/colors';

function ListItem({title, subTitle, image, onPress, swipeActions}) {
  return (
    <Swipeable renderRightActions={swipeActions}>
      <TouchableHighlight onPress={onPress} underlayColor={colors.light} >
        <View style={styles.container}>
          <Image source={image} style={styles.image} />
          <View>
            <AppText style={styles.title}>{title}</AppText>
            <AppText style={styles.subTitle}>{subTitle}</AppText>
          </View>
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 15
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

export default ListItem;