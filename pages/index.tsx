import Head from 'next/head';
import Image from 'next/image';
import React, { useState } from 'react';

import SearchBar from '../components/index/SearchBar/SearchBar';
import Pokemon from '../components/index/Pokemon/Pokemon';
import PokemonData from '../components/index/PokemonData/PokemonData';
import { fetchPokemon } from '../utils/fetchPokemon';
import styles from '../styles/index.module.scss';

import clock from '../public/assets/icons/clock.svg';

export default function Home() {
  const [pokemon, setPokemon] = useState();
  const [loaded, setLoaded] = useState(false);

  const [notFound, setNotFound] = useState(false);
  const [empty, setEmpty] = useState('');

  const getPokemon: any = async (query: any) => {
    if (!query) {
      setEmpty('You must input a Pokémon first!');
      setNotFound(true);
      return;
    }

    setNotFound(false);
    setLoaded(true);
    setTimeout(async () => {
      try {
        const response = await fetchPokemon(query);
        const result = await response.json();
        setPokemon(result);
        setLoaded(false);
      } catch (err) {
        setLoaded(false);
        setNotFound(true);
        setEmpty(`"${query.toUpperCase()}" does not exist. Please, try again.`);
      }
    }, 1000);
  };

  return (
    <>
      <Head>
        <title>Poké Search | Home</title>
        <meta
          name='description'
          content='A free tool for searching Pokémon information.'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <section className={styles.container}>
          <div className={styles['left-container']}>
            <SearchBar getPokemon={getPokemon} />
            <div className={styles.errors}>
              {notFound ? <p>{empty}</p> : null}

              {loaded ? (
                <div>
                  <Image src={clock} alt='Loading' />
                </div>
              ) : null}
            </div>
          </div>
          <div className={styles['right-container']}>
            {!loaded && pokemon ? (
              <Pokemon
                name={pokemon['name']}
                artwork={
                  pokemon['sprites']['other']['official-artwork'][
                    'front_default'
                  ]
                }
              />
            ) : null}
          </div>
        </section>
        <section>
          <div className={styles['right-container']}>
            {!loaded && pokemon ? (
              <PokemonData
                abilities={pokemon['abilities']}
                stats={pokemon['stats']}
                types={pokemon['types']}
                items={pokemon['held_items']}
                weightKg={pokemon['weight'] / 10}
                weightLbs={(pokemon['weight'] / 10) * 2.2046}
              />
            ) : null}
          </div>
        </section>
      </main>
    </>
  );
}
