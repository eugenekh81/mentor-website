import { ReviewItem } from '../ReviewItem';
import './Reviews.scss';
import { ReviewsList } from './ReviewsList';

export const Reviews = () => {
  return (
    <section className='section reviews' id="reviews">
      <div className='container'>
        <div className='section__content'>
          <h2 className='section__title'>Відгуки моїх учнів</h2>

          <ul className='reviews__list'>
            {ReviewsList.map((review) => (
              <ReviewItem key={review.id} {...review} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
