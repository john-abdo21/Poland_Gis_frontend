import React, { useState,useEffect} from 'react';
import {  Drawer } from 'antd';
import GeoFilter from '../features/filter/Filter';
import AllDataReq from '../features/filter/AllDataReq';
import { useSelector, useDispatch } from 'react-redux';
import { hide} from "../features/filter/StateReducer";

const App = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [allopen, setAllOpen] = useState(false);
  const view1 = useSelector((state) => state.rootdata.viewSide1);
  const view2 = useSelector((state) => state.rootdata.viewSide2); 
  const onClose = () => {
    setOpen(false);
    setAllOpen(false);
    dispatch(hide());
  };
  useEffect(() => {
    setOpen(view1);
  }, [view1]);
  useEffect(() => {
    setAllOpen(view2);
  }, [view2]);
  return (
    <>
      <Drawer
        title={<p className='text-center'>You can search for the materials you need.</p>}
        placement='left'
        closable={false}
        width='500px'
        onClose={onClose}
        open={open}
        key='1'
      >
        <GeoFilter/>
      </Drawer>
      <Drawer
        title={<p className='text-center'>You can search for the materials you need.</p>}
        placement='left'
        closable={false}
        width='500px'
        onClose={onClose}
        open={allopen}
        key='2'
      >
        <AllDataReq />
      </Drawer>
    </>
  );
};
export default App;