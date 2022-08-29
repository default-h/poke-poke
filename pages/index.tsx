import Head from 'next/head';
import Image from 'next/image';
import React, { useState } from 'react';
import SearchBar from '../components/index/SearchBar/SearchBar';
import PokemonCard from '../components/index/PokemonCard/PokemonCard';
import PokemonStats from '../components/index/PokemonStats/PokemonStats';
import { fetchPokemon } from '../utils/fetchPokemon';
import styles from '../styles/index.module.scss';
import clock from '../public/assets/icons/clock.svg';
import psyduck from '../public/assets/images/psyducknotfound.png';

export default function Home() {
  const [pokemon, setPokemon] = useState();
  const [loaded, setLoaded] = useState(false);

  const [notFound, setNotFound] = useState(false);
  const [empty, setEmpty] = useState('');

  const getPokemon: any = async (query: string) => {
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
        <title>Poké Finder | Home</title>
        <meta
          name='description'
          content='A free tool for searching Pokémon information.'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <section className={styles.container}>
          <div className={styles['left']}>
            <SearchBar getPokemon={getPokemon} />
            <strong className={styles.errors}>
              {notFound ? <>{empty}</> : null}

              {loaded ? <Image src={clock} alt='Loading icon' /> : null}
            </strong>
          </div>
          <div className={styles['right']}>
            {!loaded && pokemon && !notFound ? (
              <PokemonCard
                name={pokemon['name']}
                id={pokemon['id']}
                types={pokemon['types']}
                weightKg={pokemon['weight'] / 10}
                weightLbs={(pokemon['weight'] / 10) * 2.2046}
                heightM={pokemon['height'] / 10}
                heightFt={(pokemon['height'] / 10) * 3.28084}
                artwork={
                  pokemon['sprites']['other']['official-artwork'][
                    'front_default'
                  ]
                }
              />
            ) : null}
            <figure>
              {notFound ? (
                <Image src={psyduck} width={400} height={400} />
              ) : null}
            </figure>
          </div>
        </section>

        {!loaded && pokemon && !notFound ? (
          <section className={styles.abilities}>
            <PokemonStats
              name={pokemon['name']}
              abilities={pokemon['abilities']}
              stats={pokemon['stats']}
              items={pokemon['held_items']}
              artwork={pokemon['sprites']['other']['home']['front_default']}
              types={pokemon['types']}
            />
          </section>
        ) : null}
      </main>
    </>
  );
}
