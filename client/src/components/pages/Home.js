import React from "react";
import Contacts from "../contacts/Contacts";
import ContactFrom from "../contacts/ContactFrom";
import ContactFilter from "../contacts/ContactFilter";

const Home = () => {
  return (
    <div className="grid-2">
      <div>
        <ContactFrom />
      </div>
      <div>
        <ContactFilter />
        <Contacts />
      </div>
    </div>
  );
};

export default Home;
