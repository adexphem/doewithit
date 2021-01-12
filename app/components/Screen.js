import React from 'react';
import Constants from 'expo-constants';
import {SafeAreaView, StyleSheet, View} from 'react-native'

const { statusBarHeight } = Constants;

function Screen({ children, style={backgroundColor: "#fff"} }) {
  return (
    <SafeAreaView style={[styles.screen, style]}>
      <View style={[styles.view, style ]}>{children}</View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  screen: {
    paddingTop: statusBarHeight,
    flex: 1,
  },
  view: {
    flex: 1
  }
})

export default Screen;