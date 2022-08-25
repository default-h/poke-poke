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
          <p className={styles.identifier}>#{props.id}</p>
          <section className={styles.top}>
            <div className={styles.sprite}>
              <Image
                src={props.artwork}
                alt={props.name}
                width={400}
                height={400}
                className={styles.sprite1}
              />
            </div>
          </section>
          <section className={styles.bottom}>
            <div>
              <p className={styles.pokename}>{props.name.toUpperCase()}</p>
            </div>
            <div className={styles.types}>
              {props.types.map((type: any, key: any) => (
                <span key={key} className={styles.type}>
                  {type.type.name}
                </span>
              ))}
            </div>
            <div className={styles['height-weight']}>
              <section>
                <h2>weight</h2>
                <p>
                  {props.weightKg}kg / {Math.round(props.weightLbs * 10) / 10}
                  lbs
                </p>
              </section>
              <section>
                <h2>height</h2>
                <p>
                  {props.heightM}m / {Math.round(props.heightFt * 10) / 10}
                  ft
                </p>
              </section>
            </div>
          </section>
        </div>
      </figure>
    </div>
  );
};

export default PokemonCard;
