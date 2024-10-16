import React, { useCallback, useEffect, useState } from 'react';

import { Banner } from '../../components/Banner/Banner';
import { Header } from '../../components/Header';
import { Portfolio } from '../../components/Portfolio';
import {
  Services,
  Results,
  Products,
  About,
  Reviews,
  FAQ,
  Contacts,
} from './LazyImports';
import { Modal } from '../../components/Modal';
// import { MobileOverlay } from '../../components/MobileOverlay';

export const HomePage: React.FC = () => {
  const [currentSection, setCurrentSection] = useState<string | null>(null);

  const handleScroll = useCallback(() => {
    const sections = document.querySelectorAll('.section');
    const scrollSection = [...sections].find((section) => {
      if (section instanceof HTMLElement) {
        const sectionStart = section.offsetTop;
        const sectionHeight = section.scrollHeight;
        const sectionEnd = sectionStart + sectionHeight;
        // console.log(
        //   `Window scroll: ${window.scrollY}, Section offsetTop: ${sectionStart}, Section scroll height: ${sectionEnd}, Current section: ${section.id}`
        // );

        return (
          // window.scrollY >= section.offsetTop
          window.scrollY < sectionEnd - 74
        );
      }
    });

    if (scrollSection && scrollSection.id !== currentSection) {
      setCurrentSection(() => `#${scrollSection.id}`);
    }
  }, []);

  const handleSelect = (id: string) => {
    setCurrentSection(id);
    const sections = document.querySelectorAll('.section');
    const section = [...sections].find((s) => s.id === id);
    if (section instanceof HTMLElement) {
      const sectionStart = section.offsetTop;
      window.scrollTo({ top: sectionStart });
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, []);
  // console.log(currentSection);

  return (
    <>
      <Header currentSection={currentSection} onSelect={handleSelect} />
      <Banner />
      <Services />
      <Results />
      <Products />
      <About />
      <Portfolio />
      <Reviews />
      <FAQ />
      <Contacts />
      <Modal />
    </>
  );
};
