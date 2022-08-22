import React, { useState } from 'react';

import styles from './SearchBar.module.scss';

interface SearchBarProps {
  getPokemon: any;
  // any props that come into the component
}

const SearchBar: React.FC<SearchBarProps> = props => {
  const [search, setSearch] = useState('');
  return (
    <section className={styles.container}>
      <h1>Look up Any Pokémon!</h1>
      <div className={styles['form-container']}>
        <form
          onSubmit={e => {
            e.preventDefault();
          }}
        >
          <input
            type='text'
            id='search'
            name='search'
            placeholder='Insert Pokémon name here'
            onChange={search => setSearch(search.target.value)}
          />
        </form>
        <button
          className={styles.button}
          onClick={e => props.getPokemon(search)}
        >
          Search
        </button>
      </div>
    </section>
  );
};

export default SearchBar;
