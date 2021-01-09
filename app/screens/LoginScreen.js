import React from 'react';
import { Image, StyleSheet, View } from 'react-native'
import { Formik } from 'formik'

import AppButton from '../components/AppButton';
import AppTextInput from '../components/AppTextInput';
import Screen from '../components/Screen';

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
        >
          {({ handleChange, handleSubmit}) => (
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
              <AppTextInput
                autoCapitalise="none"
                autoCorrect={false}
                icon="lock"
                onChangeText={handleChange("password")}
                placeholder="Password "
                secureTextEntry
                textContentType="password"
              />
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