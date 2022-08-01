import React from 'react';
import { NavLink } from 'react-router-dom';
import Dropdown from './Dropdown';
function NavItems(props) {
  return (
    <li
      id={props.id}
      onClick={props.onClick}
      className={props.className}
      onMouseEnter={props.onMouseEnter}
      onMouseLeave={props.onMouseLeave}
    >
      {props.id === 'nav3' && <span className={props.icon}></span>}
      <NavLink to={props.link}>{props.navTitle}</NavLink>
      {props.id === 'nav3' && <span className={props.styleCarret}></span>}
      {props.id === 'nav3' && (
        <Dropdown className={props.showDropdown}></Dropdown>
      )}
    </li>
  );
}

export default NavItems;
