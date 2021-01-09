import React from 'react';
import { StyleSheet } from 'react-native';

import AppText from './AppText';
import colors from '../config/colors'

function ErrorMessage({ error }) {
  if(!error) return null;
  
  return (
    <AppText style={styles.error}>{error}</AppText>
  );
}

const styles = StyleSheet.create({
  error: {
    color: colors.red,
    fontSize: 12,
    marginTop: -10,
    paddingLeft: 45
  }
})

export default ErrorMessage;