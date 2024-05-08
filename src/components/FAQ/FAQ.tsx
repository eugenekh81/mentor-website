import { FAQList } from '../FAQList/FAQList';

export const FAQ = () => {
  return (
    <section className='section faqs'>
      <div className='container'>
        <div className='section__content'>
          <h2 className='section__title'>ЧАсті ПИтання (ЧаПи)</h2>

          <FAQList />
        </div>
      </div>
    </section>
  );
};
