import React from 'react';
import {Linking, ScrollView, StyleSheet, Text, View} from 'react-native';
import {Formik} from 'formik';
import * as Yup from 'yup';

import {AppButton, AppInputText, ErrorMessage} from '../components';
import {colors} from '../config';

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label('Name'),
  mobileNumber: Yup.string()
    .required()
    .min(10, 'Mobile Number must be of 10 numbers')
    .label('Mobile Number'),
  email: Yup.string().required().email().label('Email'),
  message: Yup.string().required().max(300).label('Message'),
});

function ContactForm() {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{backgroundColor: 'white'}}>
      <View style={styles.mainContainer}>
        <Text style={styles.heading}>Contact Us</Text>
        <Text style={styles.content}>
          Fill us the form and our team will contact you as soon as possible.
        </Text>

        <Formik
          initialValues={{name: '', mobileNumber: '', email: '', message: ''}}
          onSubmit={value =>
            Linking.openURL(
              `mailto:adarsh.hondadakattireebok@gmail.com?subject=Details&body= Name : ${value.name} \n Mobile Number : ${value.mobileNumber} \n Email : ${value.email} \n Message : ${value.message}`,
            )
          }
          validationSchema={validationSchema}>
          {({
            handleChange,
            handleSubmit,
            errors,
            setFieldTouched,
            touched,
            values,
          }) => (
            <>
              <AppInputText
                placeHolderName={'Name*'}
                field={'name'}
                values={values.name}
                keyboardType="default"
                handleChange={handleChange}
                setFieldTouched={setFieldTouched}
              />
              <ErrorMessage error={errors.name} visible={touched.name} />

              <AppInputText
                placeHolderName={'Mobile Number*'}
                field={'mobileNumber'}
                values={values.mobileNumber}
                keyboardType="number-pad"
                maxLength={10}
                handleChange={handleChange}
                setFieldTouched={setFieldTouched}
              />
              <ErrorMessage
                error={errors.mobileNumber}
                visible={touched.mobileNumber}
              />

              <AppInputText
                placeHolderName={'Email*'}
                field={'email'}
                values={values.email}
                keyboardType="email-address"
                autoCapitalize="none"
                handleChange={handleChange}
                setFieldTouched={setFieldTouched}
              />
              <ErrorMessage error={errors.email} visible={touched.email} />

              <AppInputText
                placeHolderName={'Message*'}
                field={'message'}
                values={values.message}
                keyboardType="default"
                numberOfLines={5}
                maxLength={300}
                multiline={true}
                handleChange={handleChange}
                setFieldTouched={setFieldTouched}
              />
              <ErrorMessage error={errors.message} visible={touched.message} />

              <View style={styles.buttonContainer}>
                <AppButton title={'Submit'} onPress={handleSubmit} />
              </View>
            </>
          )}
        </Formik>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: 20,
  },
  content: {
    fontSize: 16,
    marginTop: 4,
    marginStart: 4,
    marginBottom: 8,
    color: colors.black,
  },
  heading: {
    fontSize: 20,
    marginStart: 4,
    fontWeight: 'bold',
    color: colors.black,
  },
  mainContainer: {
    padding: 12,
    margin: 12,
  },
});

export default ContactForm;
