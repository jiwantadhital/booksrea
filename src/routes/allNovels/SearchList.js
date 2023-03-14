import { Card } from '@mui/material';
import React from 'react';
import NovelsCard from './NovelsCard';


function SearchList({ filteredPersons }) {
    const filtered = filteredPersons.map(person =>  <NovelsCard key={person.id} person={person} />); 
    return (
      <div className='novels'>
        {filtered}
      </div>
    );
  }
  export default SearchList;
