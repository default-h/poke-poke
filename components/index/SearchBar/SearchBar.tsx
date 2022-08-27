import React, { useState } from 'react';

import styles from './SearchBar.module.scss';

interface SearchBarProps {
  getPokemon: any;
  // any props that come into the component
}

const SearchBar: React.FC<SearchBarProps> = props => {
  const [search, setSearch] = useState('');
  return (
    <div className={styles.container}>
      <h1>
        Learn More About
        <br />
        <span>Pokémon</span>
      </h1>

      <p>Search for any Pokémon that you can think of!</p>

      <form
        onSubmit={e => {
          e.preventDefault();
        }}
      >
        <input
          type='text'
          id='search'
          name='search'
          onChange={search => setSearch(search.target.value)}
        />
        <button
          className={styles.button}
          onClick={e => props.getPokemon(search)}
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
