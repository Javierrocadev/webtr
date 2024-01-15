import React from 'react';
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <nav>
      <ul>
        <li><Link to={"/"}>home</Link></li>
        <li><Link to={"/pag1"}>pag1</Link></li>
        <li><Link to={"/pag2"}>pag2</Link></li>
        <li><Link to={"/pag3"}>pag3</Link></li>
        <li><Link to={"/pag4"}>pag4</Link></li>
        <li><Link to={"/pag5"}>pag5</Link></li>
        <li><Link to={"/login"}>login</Link></li>
     
      </ul>
    </nav>
  );
};

export default Nav;