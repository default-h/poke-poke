import React, { useEffect, useState } from 'react';

import styles from '../Header/Header.module.scss';

import eyes from '../../../public/assets/icons/pokeball.png';

import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  const [nav, setNav] = useState(false);
  const [menu, setMenu] = useState(false);

  return (
    <header className={styles.navbar}>
      <div className={styles.logo}>
        <Link href='/'>
          <a>
            <Image src={eyes} alt='Website icon' priority />
          </a>
        </Link>
      </div>
      <nav role='navigation'>
        <ul
          className={`${
            nav ? [styles.menu, styles.active].join(' ') : [styles.menu]
          }`}
        >
          <li className={styles.help}>
            <Link href='/'>
              <a aria-label='Frequeny Asked Questions page'>help</a>
            </Link>
          </li>
        </ul>
      </nav>

      <button
        aria-label='menu'
        aria-expanded={menu ? 'true' : 'false'}
        className={`${
          menu
            ? [styles['menu-btn'], styles.open].join(' ')
            : [styles['menu-btn']]
        }`}
        onClick={() => {
          setMenu(!menu);
          setNav(!nav);
        }}
      >
        <div className={styles['menu-btn__burger']}></div>
      </button>
    </header>
  );
};

export default Header;
