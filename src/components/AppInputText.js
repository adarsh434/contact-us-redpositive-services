import React, {useState} from 'react';
import {TextInput, View, StyleSheet, Text} from 'react-native';

import {colors} from '../config';
import ErrorMessage from './ErrorMessage';

function AppInputText({
  placeHolderName,
  handleChange,
  setFieldTouched,
  values,
  field,
  errorName,
  visibility,
  moreStyles,
  ...otherProp
}) {
  const [focus, setFocus] = useState(false);
  const [placeHolder, setPlaceHolder] = useState(false);

  return (
    <>
      <View
        style={{
          ...styles.container,
          borderColor: focus ? colors.purple : colors.disabled,
        }}>
        <TextInput
          style={{...styles.text, ...moreStyles}}
          onBlur={() => {
            setFieldTouched(field);
          }}
          onFocus={() => {
            setFocus(true);
            setPlaceHolder(true);
          }}
          onChangeText={handleChange(field)}
          onEndEditing={() => {
            setFocus(false);
            values.length === 0 ? setPlaceHolder(false) : setPlaceHolder(true);
          }}
          {...otherProp}
        />
        <View style={{...styles.placeHolder, top: placeHolder ? -14 : 12}}>
          <Text
            style={{
              padding: 4,
              color: focus ? colors.purple : colors.placeHolder,
            }}>
            {placeHolderName}
          </Text>
        </View>
      </View>
      <ErrorMessage error={errorName} visible={visibility} />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    borderWidth: 2,
    borderRadius: 12,
    marginTop: 12,
    marginEnd: 12,
  },
  text: {
    zIndex: 1,
    padding: 12,
    color: colors.black,
  },
  placeHolder: {
    backgroundColor: 'white',
    position: 'absolute',
    left: 12,
  },
});

export default AppInputText;
