export const Portfolio = () => {
  return (
    <section className='section portfolio'>
      <div className='container'>
        <div className='section__content'>
          <h2 className='section__title'>Мої роботи</h2>
          <p className="section__description">
            Нижче ти можеш подивитися на деякі мої роботі. Я не викладаю всі їх тут, щоб не перевантажувати тебе інфорацією. Якщо тобі цікавий повний перелік моїх робіт - ти можешь ознайомитися з ними на моєму Гітхабі
          </p>
          <ul className="section__list">
            <li className="section__item">
              <a href="" className="section__link">Лендінг "Miami Kings"</a>
              </li>
            <li className="section__item">
              <a href="" className="section__link">Сайт інтернет-магазину мобільних пристроїв</a>
              </li>
            <li className="section__item">
              <a href="" className="section__link">Багатосторінковий сайт ГО "Психологічний центр The Soul"</a>
              </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
