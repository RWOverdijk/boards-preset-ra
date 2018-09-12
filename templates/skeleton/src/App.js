import React from 'react';
import { Admin, Resource } from 'react-admin';
import jsonServerRestClient from 'ra-data-json-server';

const App = () => (
  <Admin dataProvider={jsonServerRestClient('http://jsonplaceholder.typicode.com')}>
  </Admin>
);

export default App;
