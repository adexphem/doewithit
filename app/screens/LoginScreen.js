import React from 'react';
import { Image, StyleSheet, View } from 'react-native'
import { Formik } from 'formik'
import * as Yup from 'yup'

import AppButton from '../components/AppButton';
import AppTextInput from '../components/AppTextInput';
import Screen from '../components/Screen';
import AppText from '../components/AppText';

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
          {({ handleChange, handleSubmit, errors}) => (
            <View style={styles.container}>
              <AppTextInput
                autoCapitalise="none"
                autoCorrect={false}
                icon="email"
                keyboardType="email-address"
                onChangeText={handleChange("email")}
                placeholder="Email"
                textContentType="emailAddress"
              />
              <AppText style={styles.invalid}>{errors.email}</AppText>
              <AppTextInput
                autoCapitalise="none"
                autoCorrect={false}
                icon="lock"
                onChangeText={handleChange("password")}
                placeholder="Password "
                secureTextEntry
                textContentType="password"
              />
              <AppText style={styles.invalid}>{errors.password}</AppText>
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