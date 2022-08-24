import React from 'react';

import Image from 'next/image';
import styles from './PokemonCard.module.scss';

const PokemonCard: React.FC<any> = props => {
  return (
    <div className={styles.container}>
      <figure className={styles.header}>
        {/* <div className={styles.sprite}>
          <Image
            src={props.sprite1}
            alt={props.name}
            width={100}
            height={100}
          />

          <Image
            src={props.sprite2}
            alt={props.name}
            width={100}
            height={100}
          />
        </div> */}
      </figure>

      <figure className={styles.fade}>
        <div className={styles.card}>
          <section className={styles.top}>
            <div className={styles.sprite}>
              <Image
                src={props.sprite}
                alt={props.name}
                width={100}
                height={100}
                className={styles.sprite1}
              />
            </div>
            <p className={styles.identifier}>#{props.id}</p>
          </section>
          <section className={styles.bottom}>
            <p className={styles.pokename}>{props.name.toUpperCase()}</p>
            <ul className={styles.types}>
              {props.types.map((type: any, key: any) => (
                <li key={key}>{type.type.name}</li>
              ))}
            </ul>
            <p>
              {props.weightKg}kg / {Math.round(props.weightLbs * 10) / 10}lbs
            </p>
          </section>
        </div>
      </figure>
    </div>
  );
};

export default PokemonCard;
