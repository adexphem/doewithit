import React from 'react';
import Constants from 'expo-constants';
import {SafeAreaView, StyleSheet} from 'react-native'

const { statusBarHeight } = Constants;

function Screen({ children, style={backgroundColor: "#fff"} }) {
  return (
    <SafeAreaView style={[styles.screen, style]}>
      {children}
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  screen: {
    paddingTop: statusBarHeight,
    flex: 1,
  }
})

export default Screen;