import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {colors} from '../config';

function ErrorMessage({error, visible}) {
  if (!error || !visible) return;

  return <Text style={styles.message}>{error}</Text>;
}

const styles = StyleSheet.create({
  message: {
    color: colors.red,
    marginStart: 4,
  },
});

export default ErrorMessage;
