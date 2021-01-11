import React from "react";
import { StyleSheet, View } from "react-native";
import * as Yup from "yup";

import Screen from "../components/Screen";
import { AppForm, AppFormField, SubmitButton } from "../components/forms";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().min(3).label("Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).max(20).label("Password"),
});

function RegisterScreen(props) {
  return (
    <Screen>
      <AppForm
        initialValues={{ name: "", email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}>
        <View style={styles.container}>
        <AppFormField
            autoCapitalise='none'
            autoCorrect={false}
            icon='account'
            name='name'
            keyboardType='default'
            placeholder='Name'
            textContentType='name'
          />
          <AppFormField
            autoCapitalise='none'
            autoCorrect={false}
            icon='email'
            name='email'
            keyboardType='email-address'
            placeholder='Email'
            textContentType='emailAddress'
          />
          <AppFormField
            autoCapitalise='none'
            autoCorrect={false}
            icon='lock'
            name='password'
            placeholder='Password '
            secureTextEntry
            textContentType='password'
          />
          <SubmitButton title='Register' />
        </View>
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  invalid: {
    color: "red",
    fontSize: 12,
    marginTop: -10,
    paddingLeft: 40,
  },
  container: {
    width: "85%",
    alignSelf: "center",
    paddingTop: 20,
  },
});

export default RegisterScreen;
