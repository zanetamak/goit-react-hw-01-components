import css from './Statistics.module.css';
import { getRandomHexColor } from '../../utils/getRandomHexColor';
import PropTypes from 'prop-types';

 const Statistics = ({ title, stats }) => {
    
    return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}
      <ul className={css.statList}>
        {stats.map(stat => (
             <li
            style={{ backgroundColor: getRandomHexColor() }}
            key={stat.id}
            className={css.item}
          >
            <span className={css.label}>{stat.label}</span>
            <span className={css.percentage}>{stat.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf( 
        PropTypes.shape({
            label: PropTypes.string.isRequired,
            id: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        })
    )
};

export default Statistics;

