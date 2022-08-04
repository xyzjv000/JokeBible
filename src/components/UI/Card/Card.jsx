import React from 'react';
import styles from './Card.module.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { jokeAction } from '../../../store';

function Card(props) {
  let dispatch = useDispatch();
  let navigate = useNavigate();
  const jokeDetailHandler = () => {
    dispatch(jokeAction.selectJoke(props.data));
    navigate(`/${props.data.id}`, { replace: true });
  };

  return (
    <div className={styles.card} onClick={jokeDetailHandler}>
      <div className={styles.jokeCategory}>
        <img
          src='./assets_Homework_Front-End_01/green-light-copy-2@2x.png'
          alt='Joke Icon'
        />
        <p>{props.data.categories[0] + ' JOKE' || 'random'}</p>
      </div>
      <p className={styles.joke}>{props.data.value}</p>
      <div className={styles.stats}>
        <button>
          SEE STATS{' '}
          <span>
            <img
              src='./assets_Homework_Front-End_01/path-copy-2@2x.png'
              alt=''
            />
          </span>
        </button>
      </div>
    </div>
  );
}

export default Card;
