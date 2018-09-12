import React from 'react';
import { Create, SimpleForm, TextInput, DisabledInput } from 'react-admin';

export const {{pascalCased}}Create = (props) => (
  <Create {...props}>
    <SimpleForm>
      <DisabledInput source="id" />
      <TextInput source="title" />
    </SimpleForm>
  </Create>
);
