import React from 'react';
import { jsonServerRestClient, Admin, Resource } from 'react-admin';

const App = () => (
  <Admin restClient={jsonServerRestClient('http://jsonplaceholder.typicode.com')}>
  </Admin>
);

export default App;
