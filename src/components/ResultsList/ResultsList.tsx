import { ResultsItem } from '../ResultsItem';
import css from './ResultsList.module.scss';
import { results } from './Results.ts';

export const ResultsList: React.FC = () => {
  return (
    <ul className={css.results}>
      {results.map((r) => (
        <ResultsItem {...r} key={r.id} />
      ))}
    </ul>
  );
};
