import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card from '../UI/Card/Card';
import styles from './Content.module.css';

function Content(props) {
  const [jokes, setJokes] = useState([]);
  const [page, setPage] = useState(15);
  useEffect(() => {
    axios
      .get(
        `https://api.chucknorris.io/jokes/search?query=${props.category.toLowerCase()}`
      )
      .then((response) => {
        if (response.data) {
          setJokes(
            response.data.result.filter((joke) => joke.categories.length > 0)
          );
        }
      });
  }, [props.category]);

  const loadMoreJokes = (event) => {
    setPage((prevState) => {
      return prevState + 15;
    });
  };
  return (
    <div className={styles.container}>
      <div
        className={styles.selectedCategory}
        style={{
          background: props.background || '#fff',
          color: props.color || '#C5AF8A',
          borderColor: props.border || '#C5AF8A',
        }}
      >
        <p>{props.category + ' JOKES' || 'ALL JOKES'}</p>
      </div>

      <div className={styles.cardBox}>
        {jokes.slice(0, page).map((joke) => {
          return <Card key={joke.id} data={joke} />;
        })}
      </div>

      <button className={styles.moreBtn} onClick={loadMoreJokes}>
        Load More Jokes
      </button>
    </div>
  );
}

export default Content;
