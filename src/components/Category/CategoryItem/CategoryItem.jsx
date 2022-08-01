import axios from 'axios';
import React, { Fragment, useEffect, useState } from 'react';
import Button from '../../UI/Button/Button';
import styles from './CategoryItem.module.css';
const STYLING = [
  {
    backgroundColor: '#F75050',
    color: '#fff',
    borderColor: '#F75050',
  },
  {
    backgroundColor: '#F88652',
    color: '#fff',
    borderColor: '#F88652',
  },
  {
    backgroundColor: '#FAB555',
    color: '#fff',
    borderColor: '#FAB555',
  },
  {
    backgroundColor: '#FBDA58',
    color: '#565659',
    borderColor: '#565659',
  },
  {
    backgroundColor: '#8BDF5E',
    color: '#fff',
    borderColor: '#8BDF5E',
  },
  {
    backgroundColor: '#5DE38B',
    color: '#fff',
    borderColor: '#5DE38B',
  },
  {
    backgroundColor: '#5FD7E3',
    color: '#fff',
    borderColor: '#5FD7E3',
  },
  {
    backgroundColor: '#fff',
    color: '#C5AF8A',
    borderColor: '#C5AF8A',
  },
];

function CategoryItem() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const localCategories = localStorage.getItem('categories');
    console.log(localCategories);
    if (localCategories) {
      setCategories(JSON.parse(localCategories).slice(0, 7));
    } else {
      axios
        .get('https://api.chucknorris.io/jokes/categories')
        .then((response) => {
          setCategories(response.data.slice(0, 7));
          localStorage.setItem('categories', JSON.stringify(response.data));
        });
    }
  }, []);

  return (
    <Fragment>
      {categories.map((CategoryItem, index) => {
        return (
          <Button
            onClick={() => {}}
            background={STYLING[index].backgroundColor}
            color={STYLING[index].color}
            borderColor={STYLING[index].borderColor}
          >
            {CategoryItem} jokes
          </Button>
        );
      })}
      <Button
        onClick={() => {}}
        background='#fff'
        color='#C5AF8A'
        borderColor='#C5AF8A'
      >
        View all
        <i className={styles.viewIcon}></i>
      </Button>
    </Fragment>
  );
}

export default CategoryItem;
