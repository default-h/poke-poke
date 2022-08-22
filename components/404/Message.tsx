import React from 'react';
import styles from './Message.module.scss';
import Link from 'next/link';
import Image from 'next/image';

import duck from '../../public/assets/images/psyduck.png';

const Message = () => {
  return (
    <section className={styles.container}>
      <figure className={styles.error}>
        <h1>404.</h1>
        <p>How did you get here?</p>
        <Link href='/'>
          <a>RETURN TO HOME</a>
        </Link>
      </figure>
      <div className={styles.image}>
        <Image src={duck} alt='A confused Psyduck' />
      </div>
    </section>
  );
};

export default Message;
