import React, { useState } from 'react'
import { Checkbox } from 'antd'
import { useSelector, useDispatch } from 'react-redux';
import {
    setIsLand,
    setIsForest,
    setIsRiver,
    setIsLake,
    setIsOther,
} from '../../../features/filter/OptionReducer'

const ItemsToSearch = () => {
    const options = useSelector(state => state.options, [])
    const dispatch = useDispatch();

    const onChangeLand = (e) => {
        dispatch(setIsLand(e.target.checked));
    };
    const onChangeForest = (e) => {
        dispatch(setIsForest(e.target.checked));
    };
    const onChangeRiver = (e) => {
        dispatch(setIsRiver(e.target.checked));
    };
    const onChangeLake = (e) => {
        dispatch(setIsLake(e.target.checked));
    };
    const onChangeOther = (e) => {
        dispatch(setIsOther(e.target.checked));
    };

    return (
        <>
            <Checkbox onChange={onChangeLand} checked={options.toSearch.isLand}>Land</Checkbox>
            <Checkbox onChange={onChangeForest} checked={options.toSearch.isForest}>Forest</Checkbox>
            <Checkbox onChange={onChangeRiver} checked={options.toSearch.isRiver}>River</Checkbox>
            <Checkbox onChange={onChangeLake} checked={options.toSearch.isLake}>Lake</Checkbox>
            <Checkbox onChange={onChangeOther} checked={options.toSearch.isOther}>Other</Checkbox>
        </>
    );
}

export default ItemsToSearch