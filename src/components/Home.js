import React, { useEffect } from "react";
import { useDispatch } from 'react-redux';
import MapView from "../features/mapView/MapView";
import App from './setting'
import { useSelector } from 'react-redux';
import { Button, Row } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
import { toggleView1 } from "../features/filter/StateReducer";
import { hide } from "../features/filter/StateReducer";
const Home = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.filter.loading, []);
  const setView1 = () => {
    dispatch(toggleView1());
  };
  useEffect(() => {
    dispatch(hide());
  }, [dispatch]);
  return (
    <Row style={{ height: "100%", width: '100%' }}>
      <Button type="primary" loading={loading} className='setting_btn'>
        {loading ? 'Loading...' : 'No Info'}
      </Button>
      {/* <Button type="primary" onClick={setView1} icon={<DownloadOutlined />} loading={loading} className='setting_btn'>
        {loading ? 'Loading...' : 'DefineData'}
      </Button> */}
      <App />
      <MapView />
    </Row>
  );
};
export default Home;
