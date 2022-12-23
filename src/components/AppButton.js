import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import {colors} from '../config';

function AppButton({title, onPress}) {
  return (
    <TouchableOpacity
      style={style.container}
      onPress={onPress}
      activeOpacity={0.7}>
      <Text style={style.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const style = StyleSheet.create({
  container: {
    backgroundColor: colors.purple,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    width: '100%',
    marginVertical: 10,
  },
  text: {
    color: colors.white,
    fontSize: 18,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
});

export default AppButton;
