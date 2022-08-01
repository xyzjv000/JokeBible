import React from 'react';
import styles from './Content.module.css';
function Content(props) {
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
        <p>{props.category || 'ALL JOKES'}</p>
      </div>
    </div>
  );
}

export default Content;
