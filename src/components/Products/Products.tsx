import './Products.scss';
import sprite from '../../assets/images/icons/sprite.svg';

export const Products = () => {
  return (
    <section className='section products'>
      <div className='container'>
        <div className='section__content'>
          <h2 className='section__title'>Які технології я викладаю</h2>
          <p className='section__subtitle'>
            Загальний курс складається з наступних розділів:
          </p>
          <ul className='products__list'>
            <li className='products__item products__item--html'>
              <svg className='products__icon'>
                <use href={`${sprite}#html`}></use>
              </svg>
              <span className="products__title">HTML</span>
            </li>
            <li className='products__item products__item--css'>
              <svg className='products__icon'>
                <use href={`${sprite}#css`}></use>
              </svg>
              <span className="products__title">CSS</span>
            </li>
            <li className='products__item products__item--js'>
              <svg className='products__icon'>
                <use href={`${sprite}#js`}></use>
              </svg>
              <span className="products__title">JavaScript</span>
            </li>
            <li className='products__item products__item--react'>
              <svg className='products__icon'>
                <use href={`${sprite}#react`}></use>
              </svg>
              <span className="products__title">React</span>
            </li>
            <li className='products__item products__item--nodejs'>
              <svg className='products__icon'>
                <use href={`${sprite}#nodejs`}></use>
              </svg>
              <span className="products__title">Node.JS</span>
            </li>
          </ul>
          <p className='section__subtitle'>
            Також ми будемо розглядати такі теми:
          </p>
          <ul className='products__list'>
            <li className='products__item products__item--github'>
              <svg className='products__icon'>
                <use href={`${sprite}#github`}></use>
              </svg>
              <span className="products__title">GitHub</span>
            </li>
            <li className='products__item products__item--figma'>
              <svg className='products__icon'>
                <use href={`${sprite}#figma`}></use>
              </svg>
              <span className="products__title">Figma</span>
            </li>
            <li className='products__item products__item--bootstrap'>
              <svg className='products__icon'>
                <use href={`${sprite}#bootstrap`}></use>
              </svg>
              <span className="products__title">Bootstrap</span>
            </li>
            <li className='products__item products__item--api'>
              <svg className='products__icon'>
                <use href={`${sprite}#api`}></use>
              </svg>
              <span className="products__title">API</span>
            </li>
            <li className='products__item products__item--sql'>
              <svg className='products__icon'>
                <use href={`${sprite}#sql`}></use>
              </svg>
              <span className="products__title">SQL</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
