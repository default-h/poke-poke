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
      <h1>Look up Any Pokémon!</h1>

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
      </form>
      <button className={styles.button} onClick={e => props.getPokemon(search)}>
        Search
      </button>
    </div>
  );
};

export default SearchBar;
