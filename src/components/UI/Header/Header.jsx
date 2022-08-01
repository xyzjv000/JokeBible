import React, { useEffect } from 'react';
import styles from './Header.module.css';
import NavItems from './NavItems';

function Header() {
  const [isFocused, setIsFocused] = React.useState(false);
  const [isFocusedValue, setIsFocusedValue] = React.useState(styles.dropdown);
  const [active, setActive] = React.useState('');
  useEffect(() => {
    let timer;
    if (isFocused) {
      setIsFocusedValue(`${styles.dropdown} ${styles.showDropdown}`);
    } else {
      timer = setTimeout(() => {
        setIsFocusedValue(styles.dropdown);
      }, 500);
    }
    return () => {
      clearTimeout(timer);
    };
  }, [isFocused]);

  const focusHandler = (event) => {
    if (event.type === 'mouseleave') {
      setIsFocused(false);
    }

    if (event.type === 'mouseenter') {
      setIsFocused(true);
    }
  };

  const navClickHandler = (event) => {
    const id = event.target.id ? event.target.id : event.target.parentNode.id;
    if (id === 'nav1') {
      setActive(id);
    } else if (id === 'nav2') {
      setActive(id);
    } else {
      setActive(id);
    }
  };

  let showDropdown = isFocusedValue;
  return (
    <header className={styles.header}>
      <nav>
        <ul>
          <NavItems
            id='nav1'
            onClick={navClickHandler}
            className={active === 'nav1' ? `${styles.active}` : ''}
            link='/'
            navTitle="SO FUNKTIONIERT'S"
          />
          <NavItems
            id='nav2'
            onClick={navClickHandler}
            className={active === 'nav2' ? `${styles.active}` : ''}
            link='/'
            navTitle='SONDERANGEBOTE'
          />
          <NavItems
            id='nav3'
            onClick={navClickHandler}
            className={
              active === 'nav3'
                ? `${styles.withIcons} ${styles.active}`
                : styles.withIcons
            }
            link='/'
            navTitle="SO FUNKTIONIERT'S"
            onMouseEnter={focusHandler}
            onMouseLeave={focusHandler}
            icon={styles.userIcon}
            styleCarret={styles.styleCarret}
            showDropdown={showDropdown}
          />
        </ul>
      </nav>
    </header>
  );
}

export default Header;
