import React, { useState } from 'react';
import logo from '../../../public/assets/images/psyduck.png';
import styles from './SearchBar.module.scss';

interface SearchBarProps {
  getPokemon: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = props => {
  const [search, setSearch] = useState('');

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === ' ') {
      e.preventDefault();
    }
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget.value.includes(' ')) {
      e.currentTarget.value = e.currentTarget.value.replace(/\s/g, '');
    }
  };

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
        <label htmlFor='search' className={styles['sr-only']}>
          Search
        </label>
        <input
          type='text'
          id='search'
          name='search'
          onKeyDown={handleKeyDown}
          onChange={search => {
            setSearch(search.target.value);
          }}
          onInput={handleInput}
          aria-label='Search Pokemon'
          autoComplete='off'
        />
        <button
          className={styles.button}
          onClick={e => props.getPokemon(search)}
          aria-label='Search'
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
