import React from 'react';

//switch to a stateless functional component

const NavBar = ({ totalCounters }) => {
  return (
    <nav className='navbar navbar-light bg-light'>
      <a className='navbar-brand' href='/'>
        Shopping Cart Items{' '}
        <span className='badge badge-pill badge-secondary'>
          {totalCounters}
        </span>
      </a>
    </nav>
  );
};

export default NavBar;
