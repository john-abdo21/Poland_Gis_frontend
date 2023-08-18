import React, { useState } from 'react'
import { Checkbox } from 'antd'
import { useSelector, useDispatch } from 'react-redux';


const onChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
};

const ItemsToSearch = () => {
    return (
        <>
            <Checkbox onChange={onChange}>Land</Checkbox>
            <Checkbox onChange={onChange}>Forest</Checkbox>
            <Checkbox onChange={onChange}>River</Checkbox>
            <Checkbox onChange={onChange}>Lake</Checkbox>
        </>
    );
}

export default ItemsToSearch