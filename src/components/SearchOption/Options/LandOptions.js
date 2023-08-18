import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Modal, Form, Input, Button, Row, Col, Divider, Collapse, Checkbox, Select } from 'antd'

const LandOptions = () => {
    const customLabel = text => (
        <Checkbox>{text}</Checkbox>
    )
    const handleChange = e => {
        return (true)
    }
    return (
        <>
            <p
                style={{
                    paddingLeft: 24,
                }}
            >
                <Row gutter={[6]}>
                    <Col xs={6}>
                        <Checkbox>Distance</Checkbox>
                    </Col>
                    <Col xs={18}>
                        <Row gutter={[6]}>
                            <Col xs={12}>
                                <Form.Item label={customLabel('Min Distance')} name="R_Min_Distance" rules={[{ required: false },]} >
                                    <Input type='number' placeholder="0.0" suffix={'Km'} defaultValue={0.0} />
                                </Form.Item>
                            </Col>
                            <Col xs={12}>
                                <Form.Item label="Max Distance" name="R_Max_Distance" rules={[{ required: true, message: 'Empty!', },]}>
                                    <Input type='number' placeholder="0.0" suffix={'Km'} defaultValue={10.0} />
                                </Form.Item>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row gutter={[6]}>
                    <Col xs={6}>
                        <Checkbox>Length</Checkbox>
                    </Col>
                    <Col xs={18}>
                        <Row gutter={[6]}>
                            <Col xs={12}>
                                <Form.Item label='Min Length' name="R_Min_Length" rules={[{ required: true, message: 'Empty!', },]}>
                                    <Input type='number' placeholder="0.0" suffix={'Km'} defaultValue={0.0} />
                                </Form.Item>
                            </Col>
                            <Col xs={12}>
                                <Form.Item label={customLabel('Max Length')} name="R_Max_Length" rules={[{ required: false },]}>
                                    <Input type='number' placeholder="0.0" suffix={'Km'} defaultValue={10.0} />
                                </Form.Item>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row gutter={[6]}>
                    <Col xs={6}>
                        <Checkbox>Width</Checkbox>
                    </Col>
                    <Col xs={18}>
                        <Row gutter={[6]}>
                            <Col xs={12}>
                                <Form.Item label='Min Width' name="R_Min_Width" rules={[{ required: true, message: 'Empty!', },]}>
                                    <Input type='number' placeholder="0.0" suffix={'m'} defaultValue={0.0} />
                                </Form.Item>
                            </Col>
                            <Col xs={12}>
                                <Form.Item label={customLabel('Max Width')} name="R_Max_Width" rules={[{ required: false },]}>
                                    <Input type='number' placeholder="0.0" suffix={'m'} defaultValue={10.0} />
                                </Form.Item>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row gutter={[6]}>
                    <Col xs={6}>
                        <Checkbox>Name</Checkbox>
                    </Col>
                    <Col xs={18}>
                        <Row gutter={[6]}>
                            <Col xs={8}>
                                <Form.Item label='Type' name="R_Name_Include">
                                    <Select
                                        defaultValue="Include"
                                        onChange={handleChange}
                                        options={[
                                            {
                                                value: 'include',
                                                label: 'Include',
                                            },
                                            {
                                                value: 'exact',
                                                label: 'Exact',
                                            },
                                            {
                                                value: 'start',
                                                label: 'Start',
                                            },
                                            {
                                                value: 'end',
                                                label: 'End',
                                                // disabled: true,
                                            },
                                        ]}
                                    />
                                </Form.Item>
                            </Col>
                            <Col xs={16}>
                                <Form.Item label='Reference' name="R_Name_Ref" rules={[{ required: true, message: 'Empty!', },]}>
                                    <Input type='text' />
                                </Form.Item>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </p>
        </>
    )
}


export default LandOptions