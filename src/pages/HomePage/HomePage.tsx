import React, { useCallback, useEffect, useState } from 'react';

import { Banner } from '../../components/Banner';
import { Services } from '../../components/Services';
import { Products } from '../../components/Products';
import { About } from '../../components/About';
import { Portfolio } from '../../components/Portfolio';
import { Reviews } from '../../components/Reviews';
import { Contacts } from '../../components/Contacts';
import { FAQ } from '../../components/FAQ';
import { Header } from '../../components/Header';

export const HomePage: React.FC = () => {
  const [currentSection, setCurrentSection] = useState<string | null>(null);

  const handleScroll = useCallback(() => {
    const sections = document.querySelectorAll('.section');
    const scrollSection = [...sections].find((section) => {
      if (section instanceof HTMLElement) {
        return (
          section.offsetTop >= window.scrollY &&
          window.scrollY < section.offsetTop + section.scrollHeight
        );
      }
    });

    if (scrollSection && scrollSection.id !== currentSection) {
      setCurrentSection(() => `#${scrollSection.id}`);
      // window.location.hash = scrollSection.id;
    }
  }, []);

  const handleSelect = (id: string) => {
    setCurrentSection(id);
  };

  useEffect(() => {
    /*
      80 'banner'
      430 'services'
      2223 'products'
      2928 'about'
      3768 'portfolio'
      4497 'reviews'
      5542 'faq'
      6583 'contacts'
    */

    // window.addEventListener('scroll', handleScroll);
    window.addEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Header
        currentSection={currentSection}
        handleScroll={handleScroll}
        onSelect={handleSelect}
      />
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
