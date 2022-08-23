import React from 'react';

import Image from 'next/image';
import styles from './PokemonData.module.scss';

const PokemonData: React.FC<any> = props => {
  return (
    <section className={styles.container}>
      <div className={styles['attributes-container']}>
        <div className={styles.attributes}>
          <h3>Abilities</h3>

          {props.abilities.map((ability: any, key: any) => (
            <div key={key}>
              <p>{ability.ability.name}</p>
            </div>
          ))}
        </div>

        <div className={styles.attributes}>
          <h3>Types</h3>
          {props.types.map((type: any, key: any) => (
            <div key={key}>
              <p>{type.type.name}</p>
            </div>
          ))}
        </div>

        <div className={styles.attributes}>
          <h3>Stats</h3>
          {props.stats.map((stat: any, key: any) => (
            <div key={key}>
              <p>{stat.stat.name}</p>
            </div>
          ))}
        </div>

        <div className={styles.attributes}>
          <h3>Items</h3>
          {props.items.map((item: any, key: any) => (
            <div key={key}>
              <p>{item.item.name}</p>
            </div>
          ))}
        </div>

        <div className={styles.attributes}>
          <h3>Weight</h3>
          <div>
            <p>{props.weightKg}</p>
            <p>{Math.round(props.weightLbs * 10) / 10}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PokemonData;
