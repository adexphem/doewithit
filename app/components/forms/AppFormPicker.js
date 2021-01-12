import React from "react";
import { useFormikContext } from 'formik'

import AppPicker from '../AppPicker'
import ErrorMessage from './ErrorMessage'

function AppFormPicker({ name, items, placeholder, width }) {
  const { errors, touched, setFieldValue, values } = useFormikContext();
  return (
    <>
      <AppPicker
        items={items}
        name={name}
        placeholder={placeholder}
        selectedItem={values[name]}
        onSelectItem={(item) => setFieldValue(name, item)}
        width={width}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default AppFormPicker;
