import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Modal, Form, Input, Button, Row, Col, Divider, Collapse } from 'antd'
import ButtonGlow from './ButtonGlow';
import { fetchFilter } from "../../features/filter/FilterSlice";
import { hide} from "../../features/filter/StateReducer";
import "../../features/filter/filter.module.css";

import ItemsToSearch from './Options/ItemsToSearch';

import LandOptions from './Options/LandOptions';
import ForestOptions from './Options/ForestOptions';
import RiverOptions from './Options/RiverOptions';
import LakeOptions from './Options/LakeOptions';



const OptionCard = () => {

  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    dispatch(fetchFilter(options));
    dispatch(hide());
  };
  const loading = useSelector(state => state.filter.loading, []);
  const options = useSelector(state => state.options, [])
  const isLand = options.toSearch.isLand
  const isForest = options.toSearch.isForest
  const isRiver = options.toSearch.isRiver
  const isLake = options.toSearch.isLake
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };


  const items = [
    {
      key: '1',
      label: false ? 'Land' : 'Land (Unset)',
      children: <LandOptions />,
    },
    {
      key: '2',
      label: false ? 'Forest' : 'Forest (Unset)',
      children: <ForestOptions />,
    },
    {
      key: '3',
      label: options.options.river.distance.isSet ? 'River' : 'River (Unset)',
      children: <RiverOptions />,
    },
    {
      key: '4',
      label: false ? 'Lake' : 'Lake (Unset)',
      children: <LakeOptions />,
    },
    {
      key: '5',
      label: false ? 'Other' : 'Other (Unset)',
      children: 'Other Options Goes Here...',
    },
  ]

  return (
    <>
      <ButtonGlow onClick={showModal} />
      <Modal
        title="Search Options"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        className='option-modal'
        footer={[]}
      >
        <Form layout="vertical" onFinish={handleSubmit}>
          <Divider orientation="left" plain> <span><h5>What are you going to search?</h5></span> </Divider>
          <Row justify="center">
            <ItemsToSearch />
          </Row>
          
          {(isLand || isForest || isRiver || isLake) && <Divider orientation="left" plain> <span><h5>Select more options below</h5></span> </Divider>}
          {(isLand || isForest || isRiver || isLake) && <Collapse items={items} bordered={false} />}
          
          <Form.Item style={{ marginRight: '15px', marginBottom: '-10px', marginTop: '10px' }}>
            <Row justify="end">
              <Col>
                <Button type="primary" htmlType="submit">
                  Search
                </Button>
              </Col>
            </Row>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}

export default OptionCard