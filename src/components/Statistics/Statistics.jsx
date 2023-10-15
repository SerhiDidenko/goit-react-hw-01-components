import css from './Statistics.module.css';
import { randomizeColor } from 'utils/colorRandomizer';

export const Statistics = ({ title, stats }) => {
    return <section className={css.statistics}>
      {title && (<h2 className={css.title}>{title}</h2>)}
        <ul className={css["stat-list"]}>
          {stats.map(({label, percentage, id }) => {
            return <li key={ id } className={css.item} style={{
                backgroundColor: randomizeColor()
              }}>
              <span className={css.label}>{ label }</span>
              <span className={css.percentage}>{ percentage }%</span>
            </li>
          })}
        </ul>
    </section>
}