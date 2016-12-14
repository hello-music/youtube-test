import React  from 'react';
import { Link } from 'react-router';
import { navBar } from './styles.scss';

const NavBar = () => (
  <div className={navBar}>
    <Link to="/">Home</Link>
    <Link to="/favourites">Favourites</Link>
  </div>
);
export default NavBar;
