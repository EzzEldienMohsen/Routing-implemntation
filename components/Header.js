import Link from 'next/link';
import React from 'react';
import NavLinks from './NavLinks';

const Header = () => {
  return (
    <header id="main-header">
      <div id="logo">
        <Link href="/">NextNews</Link>
      </div>
      <NavLinks />
    </header>
  );
};
export default Header;
