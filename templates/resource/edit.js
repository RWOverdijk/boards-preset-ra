import React from 'react';
import { Edit, SimpleForm, TextInput, DisabledInput } from 'react-admin';
import { {{pascalCased}}Title } from './{{pascalCased}}Title';

export const {{pascalCased}}Edit = (props) => (
  <Edit title={<{{pascalCased}}Title />} {...props}>
    <SimpleForm>
      <DisabledInput source="id" />
      <TextInput source="title" />
    </SimpleForm>
  </Edit>
);
