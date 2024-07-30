import { Button } from '../Button';
import css from './ServicesItem.module.scss';
import girl from '../../assets/images/services/girl.gif';

//type Props = {};

export const ServicesItem: React.FC = () => {
  return (
    <li className={css.service}>
      <div className={css.imageContainer}>
        <img src={girl} alt='' className={css.image} />
      </div>
      <div className={css.content}>
        <h3 className={css.title}>
          <span>для</span>
          Студентів курсів
        </h3>

        <p className={css.description}>
          якщо ти навчаєшся на курсах веб-розробки та:
        </p>

        <ul className={css.problems}>
          <li className={css.problem}>не встигаєш за програмою</li>
          <li className={css.problem}>маєш прогалини в знаннях</li>
          <li className={css.problem}>не розумієш завдання</li>
          <li className={css.problem}>бракує підтримки наставників</li>
        </ul>

        <Button variant='services'>Пробний урок</Button>
      </div>
    </li>
  );
};
