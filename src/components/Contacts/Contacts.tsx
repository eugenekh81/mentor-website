import './Contacts.scss';

export const Contacts = () => {
  return (
    <section className='section contacts' id='contacts'>
      <div className='container'>
        <div className='section__content'>
          <h2 className='section__title'>Контакти</h2>
          <a href='https://t.me/js_mentor' className='contacts__link'>
            Call me
          </a>
        </div>
      </div>
    </section>
  );
};
