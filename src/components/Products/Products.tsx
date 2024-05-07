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
              HTML
            </li>
            <li className='products__item products__item--css'>
              <svg className='products__icon'>
                <use href={`${sprite}#css`}></use>
              </svg>
              CSS
            </li>
            <li className='products__item products__item--js'>
              <svg className='products__icon'>
                <use href={`${sprite}#js`}></use>
              </svg>
              JavaScript
            </li>
            <li className='products__item products__item--react'>
              <svg className='products__icon'>
                <use href={`${sprite}#react`}></use>
              </svg>
              React
            </li>
            <li className='products__item products__item--nodejs'>
              <svg className='products__icon'>
                <use href={`${sprite}#nodejs`}></use>
              </svg>
              Node.JS
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
              GitHub
            </li>
            <li className='products__item products__item--figma'>
              <svg className='products__icon'>
                <use href={`${sprite}#figma`}></use>
              </svg>
              Figma
            </li>
            <li className='products__item products__item--bootstrap'>
              <svg className='products__icon'>
                <use href={`${sprite}#bootstrap`}></use>
              </svg>
              Bootstrap
            </li>
            <li className='products__item products__item--api'>
              <svg className='products__icon'>
                <use href={`${sprite}#api`}></use>
              </svg>
              API
            </li>
            <li className='products__item products__item--sql'>
              <svg className='products__icon'>
                <use href={`${sprite}#sql`}></use>
              </svg>
              SQL
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
