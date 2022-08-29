import React from 'react';
import Image from 'next/image';
import styles from './PokemonStats.module.scss';
import { ProgressBar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

interface StatTypes {
  abilities: string;
  stats: string[];
  items?: string[];
  artwork: string;
  types: string[];
}

const PokemonStats: React.FC<StatTypes> = props => {
  return (
    <div className={styles['attributes-container']}>
      <section>
        <figure className={styles.artwork}>
          <Image src={props.artwork} width={200} height={200} />
        </figure>
      </section>
      <section className={styles.attributes}>
        <h3>Stats</h3>
        <ul>
          {props.stats.map((statItem: any, key: number) => (
            <li key={key}>
              <strong>{statItem.stat.name}</strong>
              <ProgressBar
                max={255}
                now={statItem.base_stat}
                label={statItem.base_stat}
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
