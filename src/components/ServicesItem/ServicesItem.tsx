import { useContext } from 'react';
import { Button } from '../Button';
import { ModalContext } from '../Context/ModalContext';
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
  const { setIsOpen } = useContext(ModalContext);
  return (
    <li className={css.service}>
      <div className={css.imageContainer}>
        <img src={imgUrl} alt='' className={css.image} />
      </div>

      <div className={css.content}>
        <div className={css.textContent}>
          <h3 className={css.title}>
            <span>для</span>
            {title}
          </h3>
          <p
            className={css.description}
            dangerouslySetInnerHTML={{ __html: description }}
          />

          <ul className={css.problems}>
            {problems.map((p) => (
              <li key={p.id} className={css.problem}>
                {p.problem}
              </li>
            ))}
          </ul>
        </div>
        <Button variant='noArrow' className={css.button} onClick={() => setIsOpen()}>
          Безкоштовний урок
        </Button>
      </div>
    </li>
  );
};
