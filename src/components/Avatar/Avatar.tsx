import avatar from '../../assets/images/about/avatar.png';
import css from './Avatar.module.scss';
export const Avatar = () => (
  <img src={avatar} alt='Avatar' className={css.image} />
);
