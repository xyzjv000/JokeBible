import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Joke.module.css';
import JokeCard from './JokeCard';
import { useSelector } from 'react-redux';
function Joke(props) {
  let { joke } = useSelector((state) => state.joke);
  let navigate = useNavigate();
  const backToHome = () => {
    navigate(`/`, { replace: true });
  };
  return (
    <div className={styles.container}>
      <div className={styles.backBg}>
        <button onClick={backToHome}>
          <span>
            <img
              src='./assets_Homework_Front-End_02/arrow-left@2x.png'
              alt=''
            />
          </span>
        </button>
      </div>

      <div className={styles.cardBox}>
        <JokeCard width='60%' height='200px' className={styles.card}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <div className={styles.jokeBadge}>
              <div className={styles.dot}></div>
              <p className={styles.badge}>
                {joke.categories[0] || 'RANDOM JOKE'}
              </p>
            </div>

            <div className={styles.rank}>
              <p>POPULAR</p>
            </div>
          </div>
          <div className={styles.jokeTitle}>
            <h2>The Granny Joke</h2>
          </div>
          <p className={styles.jokeContent}>{joke.value}</p>
        </JokeCard>
        <JokeCard width='35%' height='200px' className={styles.card} />
      </div>
    </div>
  );
}

export default Joke;
