import React from 'react';

import Image from 'next/image';
import styles from './Pokemon.module.scss';

const Pokemon: React.FC<any> = props => {
  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.pokename}>{props.name.toUpperCase()}</h2>
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
      </div>

      <figure className={styles.artwork}>
        <Image
          src={props.artwork}
          alt={props.name}
          width={350}
          height={350}
          draggable='false'
          className={styles.fade}
        />
      </figure>
    </section>
  );
};

export default Pokemon;
