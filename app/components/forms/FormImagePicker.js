import React from 'react';
import { useFormikContext } from 'formik'

import ImageInputList from '../ImageInputList';
import ErrorMessage from './ErrorMessage';

function FormImagePicker({ name }) {
  const { errors, touched, setFieldValue, values } = useFormikContext();
  const imageUris = values[name];
  
  const handleAddImage = uri => {
    setFieldValue(namae, [...imageUris, uri]);
  }

  const handleRemoveImage = uri => {
    setFieldValue(name, imageUris.filter(imageUri => imageUri !== uri));
  }

  return (
    <>
      <ImageInputList 
        imageUris={imageUris}
        onAddImage={handleAddImage}
        onRemoveImage={handleRemoveImage} 
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default FormImagePicker;