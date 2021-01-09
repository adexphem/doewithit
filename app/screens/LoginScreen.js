import React from 'react';
import { Image, StyleSheet, View } from 'react-native'
import { Formik } from 'formik'
import * as Yup from 'yup'

import AppButton from '../components/AppButton';
import AppTextInput from '../components/AppTextInput';
import Screen from '../components/Screen';
import ErrorMessage from '../components/ErrorMessage';
import AppFormField from '../components/AppFormField';
import SubmitButton from '../components/SubmitButton';

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(4).max(20).label('Password'),
})

function LoginScreen(props) {
  return (
    <Screen>
      <Image 
        style={styles.logo}
        source={require('../assets/logo-red.png')} 
      />

      <Formik
          initialValues={{email: "", password: ""}}
          onSubmit={values => console.log(values)}
          validationSchema={validationSchema}
        >
          {() => (
            <View style={styles.container}>
              <AppFormField
                autoCapitalise="none"
                autoCorrect={false}
                icon="email"
                name="email"
                keyboardType="email-address"
                placeholder="Email"
                textContentType="emailAddress"
              />
              <AppFormField
                autoCapitalise="none"
                autoCorrect={false}
                icon="lock"
                name="password" 
                placeholder="Password "
                secureTextEntry
                textContentType="password"
              />
              <SubmitButton title="Login" />
            </View>
          )}
        </Formik>
    </Screen>
  );
}

const styles = StyleSheet.create({
  invalid: {
    color: "red",
    fontSize: 11,
    marginTop: -10,
    paddingLeft: 40
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 30
  },
  container: {
    width: "85%",
    alignSelf: "center"
  }
})

export default LoginScreen;