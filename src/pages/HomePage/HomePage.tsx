import React, { useCallback, useEffect, useState } from 'react';
import { Header } from '../../components/Header';
import { Banner } from '../../components/Banner';
import { Services } from '../../components/Services';
import { Results } from '../../components/Results';
import { Products } from '../../components/Products';
import { About } from '../../components/About';
import { Portfolio } from '../../components/Portfolio';
// import { Reviews } from '../../components/Reviews';
// import { Contacts } from '../../components/Contacts';
// import { FAQ } from '../../components/FAQ';

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
          window.scrollY < sectionEnd - 94
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
      window.scrollTo({ top: section.offsetTop - 94 });
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Header currentSection={currentSection} onSelect={handleSelect} />
      <Banner />
      <Services />
      <Results />
      <Products />
      <About />
      <Portfolio />
      {/* <Reviews /> */}
      {/* <FAQ /> */}
      {/* <Contacts /> */}
    </>
  );
};
