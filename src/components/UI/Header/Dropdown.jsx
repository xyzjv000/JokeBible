import React from 'react';
import { NavLink } from 'react-router-dom';
function Dropdown(props) {
  return (
    <div className={props.className} onFocus={props.onFocus}>
      <div>
        <NavLink to='/'>My published jokes</NavLink>
      </div>
      <div>
        <NavLink to='/'>My saved jokes</NavLink>
      </div>
      <div>
        <NavLink to='/'>Account Information</NavLink>
      </div>
      <div>
        <NavLink to='/'>Publish new joke</NavLink>
      </div>
    </div>
  );
}

export default Dropdown;
