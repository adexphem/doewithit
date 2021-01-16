import React from "react";
import { StyleSheet, View } from "react-native";
import * as Yup from "yup";

import Screen from "../components/Screen";
import { AppForm, AppFormField, AppFormPicker, SubmitButton } from "../components/forms";
import CategoryPickerItem from "../components/CategoryPickerItem";
import FormImagePicker from "../components/forms/FormImagePicker";
import useLocation from "../hooks/useLocation";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(3).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  description: Yup.string().label("Descritpion"),
  category: Yup.object().required().nullable().label("Category"),
  images: Yup.array().min(1, "Please select at least one image.")
});

const categories = [
  {
    backgroundColor: "#fc5c65",
    icon: "floor-lamp",
    label: "Femi",
    value: 1,
  },
  {
    backgroundColor: "#fd9644",
    icon: "car",
    label: "Cars",
    value: 2,
  },
  {
    backgroundColor: "#fed330",
    icon: "camera",
    label: "Cameras",
    value: 3,
  },
  {
    backgroundColor: "#26de81",
    icon: "cards",
    label: "Games",
    value: 4,
  },
  {
    backgroundColor: "#2bcbba",
    icon: "shoe-heel",
    label: "Clothing",
    value: 5,
  },
  {
    backgroundColor: "#45aaf2",
    icon: "basketball",
    label: "Sports",
    value: 6,
  },
  {
    backgroundColor: "#4b7bec",
    icon: "headphones",
    label: "Movies & Music",
    value: 7,
  },
  {
    backgroundColor: "#a55eea",
    icon: "book-open-variant",
    label: "Books",
    value: 8,
  },
  {
    backgroundColor: "#778ca3",
    icon: "application",
    label: "Other",
    value: 9,
  },
];

function ListingEditScreen(props) {
  const location = useLocation();

  const handleFormSubmit = ({values, location}) => {
    console.log('location ---- ', location)
  }

  return (
    <Screen>
      <AppForm
        initialValues={{ title: "", price: "", description: "", category: null, images: [] }}
        onSubmit={(values) => handleFormSubmit({values, location})}
        validationSchema={validationSchema}>
        <View style={styles.container}>
          <FormImagePicker name="images" />
          <AppFormField maxLength={255} name='title' placeholder='Title' />
          <AppFormField
            maxLength={8}
            name='price'
            keyboardType='numeric'
            placeholder='Price'
            width={120}
          />
          <AppFormPicker 
            width={'70%'}
            numberOfColumns={3}
            PickerItemComponent={CategoryPickerItem} 
            placeholder='Category' 
            items={categories} 
            name='category' 
          />
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
