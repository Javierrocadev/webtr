// Layout.js

import React from 'react';
import Nav from './Nav';
// import NavAdmin from './NavAdmin';
// import NavUser from './NavUser';
// import Navtr from './Navtr';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div>
      <Nav />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
