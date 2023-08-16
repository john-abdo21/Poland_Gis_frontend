import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import AllDataMapView from "../features/mapView/AllDataMapView";
import { DownloadOutlined } from '@ant-design/icons';
import { toggleView2 } from "../features/filter/StateReducer";
import App from './setting'
import { Button, Row } from "antd";
import { hide } from "../features/filter/StateReducer";
const Datas = () => {
  const loading = useSelector((state) => state.data.loading, []);
  const dispatch = useDispatch();
  const setView1 = () => {
    dispatch(toggleView2());
  };
  
  useEffect(() => {
    dispatch(hide());
  }, [dispatch]);
  return (
    <Row style={{ height: "100%" }}>
      <Button type="primary" onClick={setView1} icon={<DownloadOutlined />} loading={loading} className='setting_btn'>
        {loading ? 'Loading...' : 'SelectData'}
      </Button>
      <App />
      <AllDataMapView />
    </Row>
  );
};
export default Datas;
