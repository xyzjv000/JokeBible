import React from 'react';
import styles from './Search.module.css';
function Search() {
  return (
    <div className={styles.searchBox}>
      <input
        className={styles.inputStyle}
        type='text'
        placeholder='How can we make you laugh today?'
      />
      <i className={styles.searchIcon}></i>
    </div>
  );
}

export default Search;
