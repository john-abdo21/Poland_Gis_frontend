import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Modal, Form, Input, Button, Row, Col, Divider } from 'antd'
import ButtonGlow from './ButtonGlow';
import { fetchFilter } from "../../features/filter/FilterSlice";
import { hide} from "../../features/filter/StateReducer";
import "../../features/filter/filter.module.css";

const OptionCard = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    dispatch(fetchFilter(e));
    dispatch(hide());
  };

  const loading = useSelector((state) => state.filter.loading, []);
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

  return (
    <>
      <ButtonGlow onClick={showModal} />
      <Modal title="Search Options" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} className='option-modal'>
        <Form layout="vertical" onFinish={handleSubmit}>
          <Divider orientation="left" plain> River </Divider>
          <Row gutter={[6]} style={{ margin: '-10px 0px' }}>
            <Col xs={7}>
              <Form.Item label="Length" name="R_Length" rules={[{ required: true, message: 'Empty!', },]}>
                <Input type='number' placeholder="0.0" suffix={'Km'} />
              </Form.Item>
            </Col>
            <Col xs={7}>
              <Form.Item label="Width" name="R_Width" rules={[{ required: false, message: 'Empty!', },]}>
                <Input type='number' placeholder="0.0" suffix={'m'} />
              </Form.Item>
            </Col>
            <Col xs={7}>
              <Form.Item label="Distance" name="R_Distance" rules={[{ required: false, message: 'Empty!', },]}>
                <Input type='number' placeholder="0.0" suffix={'m'} />
              </Form.Item>
            </Col>
          </Row>
          <Divider style={{ marginTop: 3, marginBottom: 3 }} orientation="left" plain> Lake </Divider>

          <Row gutter={[6]}>
            <Col xs={7}>
              <Form.Item label="Square" name="L_Area" rules={[{ required: true, message: 'Empty!', },]}>
                <Input type='number' placeholder="0.0" suffix={'m^2'} />
              </Form.Item>
            </Col>
            <Col xs={7}>
            </Col>
            <Col xs={7}>
            </Col>
          </Row>
          <Form.Item style={{ marginRight: '15px' }}>
            <Row justify="end">
              <Col>
                <Button type="primary" htmlType="submit">
                  Search
                </Button>
              </Col>
            </Row>
          </Form.Item>
          <Divider />
        </Form>
      </Modal>
    </>
  );
}

export default OptionCard