import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Modal, Form, Input, Button, Row, Col, Divider, Collapse, Checkbox, Select } from 'antd'
import customLabel from '../../../features/utils/CustomLabel'
import {
    setIsRiverDistance,
    setIsMinRiverDistance,
    setIsRiverLength,
    setIsRiverMaxLength,
    setIsRiverWidth,
    setIsRiverMaxWidth,
    setIsRiverName,
} from '../../../features/filter/OptionReducer'

const RiverOptions = () => {
    const dispatch = useDispatch();
    const options = useSelector(state => state.options.options.river, []);
    const enabled = options.distance.isSet
    const lengthEnabled = options.length.isSet
    const widthEnabled = options.width.isSet
    const nameEnabled = options.name.isSet
    const handleChange = e => {
        return (true)
    }

    const onChangeDistance = e => {
        dispatch(setIsRiverDistance(e.target.checked))
    }
    const onChangeMinDistanceLabel = e => {
        dispatch(setIsMinRiverDistance(e.target.checked))
    }
    const onChangeLength = e => {
        dispatch(setIsRiverLength(e.target.checked))
    }
    const onChangeMaxLengthLabel = e => {
        dispatch(setIsRiverMaxLength(e.target.checked))
    }
    const onChangeWidth = e => {
        dispatch(setIsRiverWidth(e.target.checked))
    }
    const onChangeMaxWidthLabel = e => {
        dispatch(setIsRiverMaxWidth(e.target.checked))
    }
    const onChangeName = e => {
        dispatch(setIsRiverName(e.target.checked))
    }
    console.log(options)

    return (
        <>
            <p
                style={{
                    paddingLeft: 24,
                }}
            >
                <Row gutter={[6]}>
                    <Col xs={6}>
                        <Checkbox onChange={onChangeDistance}>Enable</Checkbox>
                    </Col>
                    <Col xs={18}>
                        <Row gutter={[6]}>
                            <Col xs={12}>
                                <Form.Item label={customLabel('Min Distance', false, onChangeMinDistanceLabel, enabled)} name="R_Min_Distance" rules={[{ required: false },]} >
                                    <Input type='number' placeholder="0.0" suffix={'Km'} defaultValue={0.0} disabled={!(enabled && options.distance.minDistance.isSet)} />
                                </Form.Item>
                            </Col>
                            <Col xs={12}>
                                <Form.Item label={customLabel('Max Distance', true, null, enabled)} name="R_Max_Distance" rules={[{ required: true, message: 'Empty!', },]}>
                                    <Input type='number' placeholder="0.0" suffix={'Km'} defaultValue={10.0} disabled={!enabled} />
                                </Form.Item>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row gutter={[6]}>
                    <Col xs={6}>
                        <Checkbox onChange={onChangeLength} disabled={!enabled}>Length</Checkbox>
                    </Col>
                    <Col xs={18}>
                        <Row gutter={[6]}>
                            <Col xs={12}>
                                <Form.Item label={customLabel('Min Length', true, null, enabled && lengthEnabled)} name="R_Min_Length" rules={[{ required: true, message: 'Empty!', },]}>
                                    <Input type='number' placeholder="0.0" suffix={'Km'} defaultValue={0.0} disabled={!(enabled && lengthEnabled)} />
                                </Form.Item>
                            </Col>
                            <Col xs={12}>
                                <Form.Item label={customLabel('Max Length', false, onChangeMaxLengthLabel, enabled && lengthEnabled)} name="R_Max_Length" rules={[{ required: false },]}>
                                    <Input type='number' placeholder="0.0" suffix={'Km'} defaultValue={10.0} disabled={!(enabled && lengthEnabled && options.length.maxLength.isSet)} />
                                </Form.Item>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row gutter={[6]}>
                    <Col xs={6}>
                        <Checkbox onChange={onChangeWidth} disabled={!enabled}>Width</Checkbox>
                    </Col>
                    <Col xs={18}>
                        <Row gutter={[6]}>
                            <Col xs={12}>
                                <Form.Item label={customLabel('Min Width', true, null, enabled && widthEnabled)} name="R_Min_Width" rules={[{ required: true, message: 'Empty!', },]}>
                                    <Input type='number' placeholder="0.0" suffix={'m'} defaultValue={0.0} disabled={!(enabled && widthEnabled)} />
                                </Form.Item>
                            </Col>
                            <Col xs={12}>
                                <Form.Item label={customLabel('Max Width', false, onChangeMaxWidthLabel, enabled && widthEnabled)} name="R_Max_Width" rules={[{ required: false },]}>
                                    <Input type='number' placeholder="0.0" suffix={'m'} defaultValue={10.0} disabled={!(enabled && widthEnabled && options.width.maxWidth.isSet)} />
                                </Form.Item>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                {/* <Row gutter={[6]}>
                    <Col xs={6}>
                        <Checkbox onChange={onChangeName} disabled={!enabled}>Name</Checkbox>
                    </Col>
                    <Col xs={18}>
                        <Row gutter={[6]}>
                            <Col xs={8}>
                                <Form.Item label={customLabel('Method', true, null, enabled && nameEnabled)} name="R_Name_Include">
                                    <Select
                                        defaultValue="include"
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
                                        disabled={!(enabled && nameEnabled)}
                                    />
                                </Form.Item>
                            </Col>
                            <Col xs={16}>
                                <Form.Item label={customLabel('Reference', true, null, enabled && nameEnabled)} name="R_Name_Ref" rules={[{ required: true, message: 'Empty!', },]}>
                                    <Input type='text' disabled={!(enabled && nameEnabled)} />
                                </Form.Item>
                            </Col>
                        </Row>
                    </Col>
                </Row> */}
            </p>
        </>
    )
}


export default RiverOptions