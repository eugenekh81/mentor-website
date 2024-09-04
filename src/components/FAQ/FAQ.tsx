import cn from 'classnames';
import { FAQList } from '../FAQList/FAQList';
import css from './FAQ.module.scss';

export const FAQ = () => {
  return (
    <section className={cn('section', css.FAQ)} id='faq'>
      <div className='container'>
        <div className='section__content'>
          <h2 className='section__title'>
            {/* ЧаПи (ЧАсті ПИтання) */}
            Залишились питання?
          </h2>
          <FAQList />
        </div>
      </div>
    </section>
  );
};
