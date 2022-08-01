import React from 'react';
import CategoryItem from './CategoryItem/CategoryItem';
import styles from './Category.module.css';
function Category() {
  return (
    <div className={styles.content}>
      <CategoryItem />
    </div>
  );
}

export default Category;
