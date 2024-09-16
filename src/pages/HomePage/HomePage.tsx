import React, { useCallback, useEffect, useState, lazy } from 'react';

/* #region LAZY IMPORTS */
// const Header = lazy(() =>
//   import('../../components/Header/Header.tsx').then(({ Header }) => ({
//     default: Header,
//   }))
// );

// const Banner = lazy(() =>
//   import('../../components/Banner').then(({ Banner }) => ({
//     default: Banner,
//   }))
// );

import { Banner } from '../../components/Banner/Banner';
import Header from '../../components/Header/Header';
import { Portfolio } from 'src/components/Portfolio';

const Services = lazy(() =>
  import('../../components/Services').then(({ Services }) => ({
    default: Services,
  }))
);

const Results = lazy(() =>
  import('../../components/Results').then(({ Results }) => ({
    default: Results,
  }))
);

const Products = lazy(() =>
  import('../../components/Products').then(({ Products }) => ({
    default: Products,
  }))
);

const About = lazy(() =>
  import('../../components/About').then(({ About }) => ({
    default: About,
  }))
);

// const Portfolio = lazy(() =>
//   import('../../components/Portfolio').then(({ Portfolio }) => ({
//     default: Portfolio,
//   }))
// );

const Reviews = lazy(() =>
  import('../../components/Reviews').then(({ Reviews }) => ({
    default: Reviews,
  }))
);

const Contacts = lazy(() =>
  import('../../components/Contacts').then(({ Contacts }) => ({
    default: Contacts,
  }))
);

const FAQ = lazy(() =>
  import('../../components/FAQ').then(({ FAQ }) => ({
    default: FAQ,
  }))
);
/* #endregion */

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
      <Reviews />
      <FAQ />
      <Contacts />
    </>
  );
};
