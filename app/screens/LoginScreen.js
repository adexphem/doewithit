import React from 'react';
import { Image, StyleSheet, View } from 'react-native'
import { Formik } from 'formik'
import * as Yup from 'yup'

import AppButton from '../components/AppButton';
import AppTextInput from '../components/AppTextInput';
import Screen from '../components/Screen';
import ErrorMessage from '../components/ErrorMessage';

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
          {({ handleChange, handleSubmit, errors, setFieldTouched, touched}) => (
            <View style={styles.container}>
              <AppTextInput
                autoCapitalise="none"
                autoCorrect={false}
                icon="email"
                keyboardType="email-address"
                onBlur={() => setFieldTouched('email')}
                onChangeText={handleChange("email")}
                placeholder="Email"
                textContentType="emailAddress"
              />
              <ErrorMessage error={errors.email} visible={touched.email} />
              <AppTextInput
                autoCapitalise="none"
                autoCorrect={false}
                icon="lock"
                onBlur={() => setFieldTouched('password')}
                onChangeText={handleChange("password")}
                placeholder="Password "
                secureTextEntry
                textContentType="password"
              />
              <ErrorMessage error={errors.password} visible={touched.password}  />
              <AppButton 
                onPress={handleSubmit}
                title="Login" 
              />
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
    marginBottom: 20
  },
  container: {
    width: "85%",
    alignSelf: "center"
  }
})

export default LoginScreen;