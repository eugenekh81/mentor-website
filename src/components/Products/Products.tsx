import './Products.scss';
import { productsList } from './productsList';
import { ProductsItem } from '../ProductsItem';
import React from 'react';

export const Products: React.FC = React.memo(() => {
  return (
    <section className='section products' id='products'>
      <div className='container'>
        <div className='section__content'>
          <h2 className='section__title'>Які технології я викладаю</h2>

          <ul className='products__list'>
            {productsList.map((p) => (
              <ProductsItem key={p.id} {...p} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
});
