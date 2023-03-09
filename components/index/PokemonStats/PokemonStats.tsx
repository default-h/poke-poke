import React from 'react';
import Image from 'next/image';
import styles from './PokemonStats.module.scss';
import { ProgressBar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

interface StatTypes {
  name: string;
  abilities: string;
  stats: { name: string; base_stat: number }[];
  items?: string[];
  artwork: string;
  types: string[];
}

const PokemonStats: React.FC<StatTypes> = props => {
  return (
    <div className={styles['attributes-container']}>
      <section>
        <figure className={styles.artwork}>
          <Image
            src={props.artwork}
            width={300}
            height={300}
            alt={props.name}
          />
          <div className={styles.background}></div>
        </figure>
      </section>
      <section className={styles.attributes}>
        <h3>{props.name}&#39;s Stats</h3>
        <ul>
          {props.stats.map((statItem, key) => (
            <li key={key}>
              <strong>{statItem.name}</strong>
              <ProgressBar
                max={255}
                now={statItem.base_stat}
                label={statItem.base_stat}
                className={styles.progressbar}
                variant='warning'
              />
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default PokemonStats;
