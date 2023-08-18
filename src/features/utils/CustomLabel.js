import React from "react"
import { useSelector } from 'react-redux'
import { Checkbox } from 'antd'

const CustomLabel = (text, required, dispatchFunction=null, enabled) => {
    const options = useSelector(state => state.options, []);
    if (required) {
        if (enabled) {
            return <span>{text}</span>
        } else {
            return <span style={{opacity:0.3}}>{text}</span>
        }
    } else {
        if (enabled) {
            return <Checkbox onChange={dispatchFunction}>{text}</Checkbox>
        } else {
            return <Checkbox onChange={dispatchFunction} disabled>{text}</Checkbox>
        }
    }
}

export default CustomLabel