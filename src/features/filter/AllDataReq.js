import { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { Form, Input, Button, Row, Col, Divider, Spin, Space, Checkbox } from "antd";
import '../../app/constants';
import { fetchReducer, toggleRiverView, toggleLakeView, toggleForestView, toggleStationView } from "./DataReducer";
import { hide } from "../filter/StateReducer";
import "./filter.module.css";

const AllDataReq = () => {
    console.log('AllDataReq rendered');
    const dispatch = useDispatch();
    const riverView = useSelector((state) => state.data.riverView);
    const lakeView = useSelector((state) => state.data.lakeView);
    const forestView = useSelector((state) => state.data.forestView);
    const stationView = useSelector((state) => state.data.stationView);

    const riverData = useSelector((state) => state.data.river);
    const lakeData = useSelector((state) => state.data.lake);
    const forestData = useSelector((state) => state.data.forest);
    const stationData = useSelector((state) => state.data.station);

    const [riverDisable, setRiverDisable] = useState(true)
    const [lakeDisable, setLakeDisable] = useState(true)
    const [forestDisable, setForestDisable] = useState(true)
    const [stationDisable, setStationDisable] = useState(true)

    const setRiverView = () => {
        dispatch(toggleRiverView());
    };
    const setLakeView = () => {
        dispatch(toggleLakeView());
    };
    const setForestView = () => {
        dispatch(toggleForestView());
    };
    const setStationView = () => {
        dispatch(toggleStationView());
    };
    const loading = useSelector((state) => state.data.loading, []);

    const GetRiverData = (e) => {
        console.log(e)
        dispatch(fetchReducer(e));
        dispatch(hide());
    };
    const GetLakeData = (e) => {
        console.log(e)
        dispatch(fetchReducer(e));
        dispatch(hide());
    };
    const GetLandData = (e) => {
        console.log(e)
        dispatch(fetchReducer(e));
        dispatch(hide());
    };
    const GetHospitalData = () => {
        dispatch(fetchReducer({ data: 'hospital' }));
        dispatch(hide());
    };
    useEffect(() => {
        if (riverData)
            setRiverDisable(false)
        else
            setRiverDisable(true)
    }, [riverData])
    useEffect(() => {
        if (lakeData)
            setLakeDisable(false)
        else
            setLakeDisable(true)
    }, [lakeData])
    useEffect(() => {
        if (forestData)
            setForestDisable(false)
        else
            setForestDisable(true)
    }, [forestData])
    useEffect(() => {
        if (stationData)
            setStationDisable(false)
        else
            setStationDisable(true)
    }, [stationData])
    return (
        <div className={`overlay ${loading ? 'visible' : ''}`} style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            <div className="content" disabled={loading}>
                <Divider orientation="center" plain> DATA SHOW OR HIDE </Divider>
                <Row gutter={[6]} style={{ margin: '10px 0px' }}>
                    <Space align="center">
                        <Checkbox disabled={riverDisable} checked={riverView} onClick={setRiverView}>River</Checkbox>
                        <Checkbox disabled={lakeDisable} checked={lakeView} onChange={() => setLakeView(!lakeView)}>Lake</Checkbox>
                        <Checkbox disabled={forestDisable} checked={forestView} onChange={() => setForestView(!forestView)}>Forest</Checkbox>
                        <Checkbox disabled={stationDisable} checked={stationView} onChange={() => setStationView(!stationView)}>Station</Checkbox>
                    </Space>
                </Row>
                {/* River */}
                <Divider orientation="left" plain> River </Divider>
                <Form layout="vertical" onFinish={GetRiverData}>
                    <Row gutter={[6]} align='bottom'>
                        <Col xs={8}>
                            <Form.Item label="Length" name="R_length" rules={[{ required: true, message: 'Empty!', },]}>
                                <Input type='number' placeholder="0.0" suffix={'Km'} />
                            </Form.Item>
                        </Col>
                        <Col xs={8}>
                            <Form.Item label="Width" name="R_width" rules={[{ required: false, message: 'Empty!', },]}>
                                <Input type='number' placeholder="0.0" suffix={'m'} />
                            </Form.Item>
                        </Col>
                        <Col xs={8}>
                            <Form.Item style={{ marginRight: '15px' }}>
                                <Row justify="end">
                                    <Col>
                                        <Button type="primary" htmlType="submit">
                                            REQUEST
                                        </Button>
                                    </Col>
                                </Row>
                            </Form.Item>
                        </Col>
                    </Row>
                </Form>
                {/* lake */}
                <Divider style={{ marginTop: 3, marginBottom: 3 }} orientation="left" plain> Lake </Divider>
                <Form layout="vertical" onFinish={GetLakeData}>
                    <Row gutter={[6]} align='bottom'>
                        <Col xs={8}>
                            <Form.Item label="Square(min)" name="L_Area_min" rules={[{ required: true, message: 'Empty!', },]}>
                                <Input type='number' placeholder="0.0" suffix={'m^2'} />
                            </Form.Item>
                        </Col>
                        <Col xs={8}>
                            <Form.Item label="Square(max)" name="L_Area_max" rules={[{ required: false, message: 'Empty!', },]}>
                                <Input type='number' placeholder="0.0" suffix={'m^2'} />
                            </Form.Item>
                        </Col>
                        <Col xs={8}>
                            <Form.Item style={{ marginRight: '15px' }}>
                                <Row justify="end">
                                    <Col>
                                        <Button type="primary" htmlType="submit">
                                            REQUEST
                                        </Button>
                                    </Col>
                                </Row>
                            </Form.Item>
                        </Col>
                    </Row>
                </Form>
                {/* Forest */}
                <Divider style={{ marginTop: 3, marginBottom: 3 }} orientation="left" plain> Forest </Divider>
                <Form layout="vertical" onFinish={GetLakeData}>
                    <Row gutter={[6]} align='bottom'>
                        <Col xs={8}>
                            <Form.Item label="Square(min)" name="F_Area_min" rules={[{ required: true, message: 'Empty!', },]}>
                                <Input type='number' placeholder="0.0" suffix={'m^2'} />
                            </Form.Item>
                        </Col>
                        <Col xs={8}>
                            <Form.Item label="Square(max)" name="F_Area_max" rules={[{ required: false, message: 'Empty!', },]}>
                                <Input type='number' placeholder="0.0" suffix={'m^2'} />
                            </Form.Item>
                        </Col>
                        <Col xs={8}>
                            <Form.Item style={{ marginRight: '15px' }}>
                                <Row justify="end">
                                    <Col>
                                        <Button type="primary" htmlType="submit">
                                            REQUEST
                                        </Button>
                                    </Col>
                                </Row>
                            </Form.Item>
                        </Col>
                    </Row>
                </Form>
                {/* Land */}
                <Divider style={{ marginTop: 3, marginBottom: 3 }} orientation="left" plain> Land </Divider>
                <Form layout="vertical" onFinish={GetLandData}>
                    <Row gutter={[6]} align='bottom'>
                        <Col xs={8}>
                            <Form.Item label="Square(min)" name="P_Area_min" rules={[{ required: true, message: 'Empty!', },]}>
                                <Input type='number' placeholder="0.0" suffix={'m^2'} />
                            </Form.Item>
                        </Col>
                        <Col xs={8}>
                            <Form.Item label="Square(max)" name="P_Area_max" rules={[{ required: false, message: 'Empty!', },]}>
                                <Input type='number' placeholder="0.0" suffix={'m^2'} />
                            </Form.Item>
                        </Col>
                        <Col xs={8}>
                            <Form.Item style={{ marginRight: '15px' }}>
                                <Row justify="end">
                                    <Col>
                                        <Button type="primary" htmlType="submit">
                                            REQUEST
                                        </Button>
                                    </Col>
                                </Row>
                            </Form.Item>
                        </Col>
                    </Row>
                </Form>
                {/* Station */}
                <Divider style={{ marginTop: 3, marginBottom: 3 }} orientation="center" plain> Station , Hospital</Divider>
                <Row gutter={[6]} align='bottom'>
                    <Col xs={8}>
                        <Button onClick={GetHospitalData} type="primary">STATION REQUEST</Button>
                    </Col>
                    <Col xs={6}>
                    </Col>
                    <Col xs={8}>
                        <Button onClick={GetHospitalData} type="primary">HOSPITAL REQUEST</Button>
                    </Col>
                </Row>
                <Divider />

                {loading && <Spin className="spinner" />}
                {/* <div style={{ height: 1 }}>
          <JsonTable jsonData={tableJson}
          />
        </div> */}
            </div>

        </div>
    );
};

export default AllDataReq;