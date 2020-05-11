import React, { Component } from 'react';

//switch to a stateless functional component

function NavBar(props) {
  return (
    <nav className='navbar navbar-light bg-light'>
      <a className='navbar-brand' href='/'>
        Total{' '}
        <span className='badge badge-pill badge-secondary'>
          {props.totalCounters}
        </span>
      </a>
    </nav>
  );
}

export default NavBar;
