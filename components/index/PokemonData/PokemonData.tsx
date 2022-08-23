import React from 'react';

import Image from 'next/image';
import styles from './PokemonData.module.scss';

const PokemonData: React.FC<any> = props => {
  return (
    <div className={styles['attributes-container']}>
      <section className={styles.attributes}>
        <h3>Abilities</h3>
        <ul>
          {props.abilities.map((ability: any, key: any) => (
            <li key={key}>{ability.ability.name}</li>
          ))}
        </ul>
      </section>

      <section className={styles.attributes}>
        <h3>Types</h3>
        <ul>
          {props.types.map((type: any, key: any) => (
            <li key={key}>{type.type.name}</li>
          ))}
        </ul>
      </section>

      <section className={styles.attributes}>
        <h3>Stats</h3>
        <ul>
          {props.stats.map((stat: any, key: any) => (
            <li key={key}>{stat.stat.name}</li>
          ))}{' '}
        </ul>
      </section>

      <section className={styles.attributes}>
        <h3>Items</h3>
        <ul>
          {props.items.map((item: any, key: any) => (
            <li key={key}>{item.item.name}</li>
          ))}
        </ul>
      </section>

      <section className={styles.attributes}>
        <h3>Weight</h3>
        <ul>
          <li>{props.weightKg}</li>
          <li>{Math.round(props.weightLbs * 10) / 10}</li>
        </ul>
      </section>
    </div>
  );
};

export default PokemonData;
