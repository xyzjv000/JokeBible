import React from 'react';
import styles from './Cover.module.css';
import Search from '../../Search/Search';
function Cover() {
  return (
    <div className={styles.backgroundCover}>
      <div className={styles.box}>
        <p className={styles.TheJokesBible}>The Jokes Bible</p>
        <p className={styles.subHeading}>Daily Laughs for you and yours</p>
        <Search />
      </div>
    </div>
  );
}

export default Cover;
