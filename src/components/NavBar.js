import React,{useState} from "react";
import { Link } from 'react-router-dom';
import {Menu} from 'antd'
import "bootstrap/dist/css/bootstrap.min.css";
import {  SettingOutlined, SelectOutlined } from '@ant-design/icons';
const NavBar = () => {
  const [current, setCurrent] = useState('define');
  
  const items = [
    {
      label: <Link to={"/"} className="navbar-brand ">Method One</Link>,
      key: 'define',
      icon: <SettingOutlined />,
    },
    {
      label:  <Link to={"allData"} className="navbar-brand ">Method Two</Link>,
      key: 'select',
      icon: <SelectOutlined />
    },
  ];
  const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };
  return (
    <>
      <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} className="mynabar" theme="dark"/>
    </>
  );
};

export default NavBar;
