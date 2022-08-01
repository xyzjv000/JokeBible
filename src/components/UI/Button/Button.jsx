import React from 'react';
import styles from './Button.module.css';
function Button(props) {
  return (
    <button
      onClick={props.onClick}
      className={styles.btnStyle}
      style={{
        backgroundColor: props.background,
        borderColor: props.borderColor,
        color: props.color,
      }}
    >
      {props.children}
    </button>
  );
}

export default Button;
