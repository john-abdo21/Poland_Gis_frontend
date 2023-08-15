import React from "react";


import { Link } from 'react-router-dom';

import "bootstrap/dist/css/bootstrap.min.css";

// const { Header} = Layout;
const NavBar = () => {
  return (
    <nav className="navbar navbar-expand navbar-dark bg-dark">
        <Link to={"/"} className="navbar-brand">
          logo
        </Link>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"allData"} className="nav-link">
              Home
            </Link>
          </li>
        </div>
      </nav>

    // <Header
    //     style={{
    //       display: 'flex',
    //       alignItems: 'center',
    //     }}
    //   >

    // <div className="demo-logo" />
    //     <Menu
    //       theme="dark"
    //       mode="horizontal"
    //       defaultSelectedKeys={['1']}          
    //     >
    //         <Menu.Item key = "1">Home </Menu.Item>
    //         <Menu.Item key = "2">About </Menu.Item>
    //     </Menu>

    //   </Header>

  );
};

export default NavBar;
