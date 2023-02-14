import React from 'react';
import Image from 'next/image';
import styles from './PokemonCard.module.scss';

interface CardTypes {
  name: string;
  id: number;
  types: { type: { name: string } }[];
  weightKg: number;
  weightLbs: number;
  heightM: number;
  heightFt: number;
  artwork: string;
}

const PokemonCard: React.FC<CardTypes> = props => {
  return (
    <div className={styles.container}>
      <figure className={styles.card}>
        <section className={styles.top}>
          <div className={styles['artwork-container']}>
            <Image
              src={props.artwork}
              alt={props.name}
              width={400}
              height={400}
              className={styles.artwork}
            />
          </div>
        </section>
        <section className={styles.bottom}>
          <h2 className={styles.pokename}>{props.name.toUpperCase()}</h2>
          <div className={styles.types}>
            {props.types.map((type, key) => (
              <span
                key={key}
                className={`${styles[type.type.name]} ${styles.type}`}
              >
                {type.type.name}
              </span>
            ))}
          </div>
          <div className={styles['height-weight']}>
            <section>
              <h3>Weight</h3>
              <p>
                {props.weightKg}kg / {Math.round(props.weightLbs * 10) / 10}
                lbs
              </p>
            </section>
            <section>
              <h3>Height</h3>
              <p>
                {props.heightM}m / {Math.round(props.heightFt * 10) / 10}
                ft
              </p>
            </section>
            <p className={styles.identifier}>#{props.id}</p>
          </div>
        </section>
      </figure>
    </div>
  );
};

export default PokemonCard;
