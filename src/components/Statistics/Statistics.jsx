import css from './Statistics.module.css';
import PropTypes from 'prop-types';


export const Statistics = ({ title, stats }) => {
    function getRandomHexColor() {
        return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    }
    return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}
      <ul className={css.statList}>
        {stats.map(stat => (
             <li
                style={{ backgroundColor: getRandomHexColor() }}
                // key={stat.id}
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
    title: PropTypes.string.isRequired,
}

export default Statistics;

