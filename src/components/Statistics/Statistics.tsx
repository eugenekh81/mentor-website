import React from 'react';
import './Statistics.scss';

export const Statistics:React.FC = () => {
  return (
    <div className="statistics">
      <ul className="statistics__list">
        <li className="statistics__item">
          <p className="statistics__number">100+</p>
          <p className="statistics__text">Учнів</p>
        </li>
        <li className="statistics__item">
          <p className="statistics__number">1200+</p>
          <p className="statistics__text">Уроків</p>
        </li>
        <li className="statistics__item">
          <p className="statistics__number">1500+</p>
          <p className="statistics__text">Годин</p>
        </li>
      </ul>
    </div>
  )
}
