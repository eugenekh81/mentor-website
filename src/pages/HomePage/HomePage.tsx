import React from 'react';
import { Banner } from '../../components/Banner';
import { Services } from '../../components/Services';
import { Products } from '../../components/Products';
import { About } from '../../components/About';
import { Portfolio } from '../../components/Portfolio';
import { Reviews } from '../../components/Reviews';
import { Contacts } from '../../components/Contacts';
import { FAQ } from '../../components/FAQ';

export const HomePage: React.FC = () => {
  return (
    <>
      <Banner />
      <Services />
      <Products />
      <About />
      <Portfolio />
      <Reviews />
      <FAQ />
      <Contacts />
    </>
  );
};
