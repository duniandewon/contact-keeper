import React from 'react';
import Contacts from '../contacts/Contacts';
import ContactFrom from '../contacts/ContactFrom';

const Home = () => {
  return (
    <div className='grid-2'>
      <div>
        <ContactFrom />
      </div>
      <div>
        <Contacts />
      </div>
    </div>
  );
};

export default Home;
