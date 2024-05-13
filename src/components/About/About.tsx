import './About.scss';

export const About: React.FC = () => {
  return (
    <section className='section about'>
      <div className='container'>
        <div className='section__content'>
          <h2 className='section__title'>Про мене</h2>
          <p className='section__description'>
            Я вивчаю веб-розробку з 2020 року, викладаю - з 2022. Коли я вчився,
            я шукав вчителя, але мені не пощастило зустріти Того Самого. Я
            вивчався самотужки та витратив на це дуже багато часу. В процесі
            мені довелося самому стати тим вчителем, якого би я мріяв мати на
            початку свого шляху - спочатку для самого себе, а потім - для інших,
            таких же, як я. Саме тому я зможу вберегти тебе від найпоширеніших
            помилок усіх початківців та зберегти тобі багато часу на пошук
            правильного шляху.
          </p>
        </div>
      </div>
    </section>
  );
};
