import React from 'react'
import Header from '../components/Header/Header.jsx'
import Persons from "../components/Persons/Persons.jsx"
import Footer from "../components/footer/Footer.jsx";

const Person = () => {
  return (
        <div>
        <Header />
        <Persons />
        <Footer />
        </div>
  );
};

export default Person;