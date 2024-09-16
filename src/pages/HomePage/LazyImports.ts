import { lazy } from 'react';

export const Services = lazy(() =>
  import('../../components/Services').then(({ Services }) => ({
    default: Services,
  }))
);

export const Results = lazy(() =>
  import('../../components/Results').then(({ Results }) => ({
    default: Results,
  }))
);

export const Products = lazy(() =>
  import('../../components/Products').then(({ Products }) => ({
    default: Products,
  }))
);

export const About = lazy(() =>
  import('../../components/About').then(({ About }) => ({
    default: About,
  }))
);

export const Reviews = lazy(() =>
  import('../../components/Reviews').then(({ Reviews }) => ({
    default: Reviews,
  }))
);

export const Contacts = lazy(() =>
  import('../../components/Contacts').then(({ Contacts }) => ({
    default: Contacts,
  }))
);

export const FAQ = lazy(() =>
  import('../../components/FAQ').then(({ FAQ }) => ({
    default: FAQ,
  }))
);
