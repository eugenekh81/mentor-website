import React from 'react';
import { ResultsList } from '../ResultsList';
import css from './Results.module.scss';

export const Results: React.FC = React.memo(() => {
  return (
    <section className={['section', css.results].join(' ')} id='results'>
      <div className='container'>
        <div className='section__content'>
          <h2 className='section__title'>Результати</h2>

          <ResultsList />
        </div>
      </div>
    </section>
  );
});
