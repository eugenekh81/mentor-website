import './Banner.scss';

export const Banner: React.FC = () => {
  return (
    <section className='section banner'>
      <div className='container'>
        <div className='banner__content'>
          <h1 className='banner__title'>
            Привіт!
            <br />
            <br />
            Мене звати Євген,
            <br />
            <br />я - ментор з веб-розробки
          </h1>
        </div>
      </div>
    </section>
  );
};
