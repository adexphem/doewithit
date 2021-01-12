import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import * as Yup from "yup";

import Screen from "../components/Screen";
import { AppForm, AppFormField, AppFormPicker, SubmitButton } from "../components/forms";
import AppPicker from "../components/AppPicker";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(3).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  description: Yup.string().label("Descritpion"),
  category: Yup.object().required().nullable().label("Category"),
});

const categories = [
  { label: "Furniture", value: 1 },
  { label: "Clothing", value: 2 },
  { label: "Camera", value: 3 },
];

function ListingEditScreen(props) {
  return (
    <Screen>
      <AppForm
        initialValues={{ title: "", price: "", description: "", category: null }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}>
        <View style={styles.container}>
          <AppFormField maxLength={255} name='title' placeholder='Title' />
          <AppFormField
            maxLength={8}
            name='price'
            keyboardType='numeric'
            placeholder='Price'
            width={120}
          />
          <AppFormPicker width={'70%'} placeholder='Category' items={categories} name='category' />
          <AppFormField
            name='description'
            multiline
            numberOfLines={3}
            placeholder='Description'
            maxLength={255}
          />
          <SubmitButton title='Post' />
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

export default ListingEditScreen;