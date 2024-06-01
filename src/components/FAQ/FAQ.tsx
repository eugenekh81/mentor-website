import { FAQList } from '../FAQList/FAQList';

export const FAQ = () => {
  return (
    <section className='section faq' id='faq'>
      <div className='container'>
        <div className='section__content'>
          <h2 className='section__title'>ЧАПИ</h2>
          <FAQList />
        </div>
      </div>
    </section>
  );
};
