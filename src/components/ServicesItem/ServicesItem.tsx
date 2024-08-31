import { Button } from '../Button';
import css from './ServicesItem.module.scss';

interface Problem {
  id: number;
  problem: string;
}

type Props = {
  imgUrl: string;
  title: string;
  description: string;
  problems: Problem[];
};

export const ServicesItem: React.FC<Props> = ({
  imgUrl,
  title,
  description,
  problems,
}) => {
  return (
    <li className={css.service}>
      <div className={css.imageContainer}>
        <img src={imgUrl} alt='' className={css.image} />
      </div>
      <h3 className={css.title}>
        <span>для</span>
        {title}
      </h3>
      <div className={css.content}>
        <p className={css.description}>{description}</p>

        <ul className={css.problems}>
          {problems.map((p) => (
            <li key={p.id} className={css.problem}>
              {p.problem}
            </li>
          ))}
        </ul>
      </div>

      <Button variant='noArrow' className={css.button}>
        Безкоштовний урок
      </Button>
    </li>
  );
};
