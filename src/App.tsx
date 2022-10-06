import React from 'react';
import {YearFacts} from './components/YearFacts';
import {fakeData} from './db/data';

function App() {
  return (
      <YearFacts data={fakeData} />
  );
}

export default App;
