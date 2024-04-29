export const Products = () => {
  return (
    <section className='section products'>
      <div className='container'>
        <div className='section__content'>
          <h2 className='section__title'>Які технології я викладаю</h2>
          <p className='section__description'>
            Загальний курс складається з наступних розділів:
          </p>
          <ul className='products__list'>
            <li className='products__item'>HTML</li>
            <li className='products__item'>CSS</li>
            <li className='products__item'>JavaScript</li>
            <li className='products__item'>React</li>
            <li className='products__item'>Node.JS</li>
          </ul>
          <p className='section__description'>
            Також у процесі курсу ми будемо розглядати такі теми:
          </p>
          <ul className='products__list'>
            <li className='products__item'>GitHub</li>
            <li className='products__item'>Figma</li>
            <li className='products__item'>Bootstrap</li>
            <li className='products__item'>API</li>
            <li className='products__item'>SQL</li>
          </ul>
        </div>
      </div>
    </section>
  );
};
