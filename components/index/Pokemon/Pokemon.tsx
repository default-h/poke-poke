import React from 'react';

import Image from 'next/image';
import styles from './Pokemon.module.scss';

const Pokemon: React.FC<any> = props => {
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
        <figcaption className={styles.pokename}>
          {props.name.toUpperCase()}
        </figcaption>
        <Image
          src={props.artwork}
          alt={props.name}
          width={350}
          height={350}
          draggable='false'
          className={styles.artwork}
        />
      </figure>
    </div>
  );
};

export default Pokemon;
