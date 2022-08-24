import React from 'react';

import Image from 'next/image';
import styles from './PokemonData.module.scss';
import { ProgressBar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const PokemonData: React.FC<any> = props => {
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
          {props.stats.map((stat: any, key: any) => (
            <li key={key}>
              <strong>{stat.stat.name}</strong>
              <ProgressBar
                max={255}
                now={stat.base_stat}
                label={stat.base_stat}
              />
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default PokemonData;
