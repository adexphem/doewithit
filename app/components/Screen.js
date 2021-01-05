import React from 'react';
import Constants from 'expo-constants';
import {SafeAreaView, StyleSheet} from 'react-native'

const {statusBarHeight} = Constants;

function Screen({ children }) {
  return (
    <SafeAreaView style={styles.screen}>
      {children}
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  screen: {
    paddingTop: statusBarHeight
  }
})

export default Screen;