import React from 'react'
import { SearchOutlined } from '@ant-design/icons'
import './ButtonGlow.css'

const ButtonGlow = ({ onClick }) => {
    const handleClick = () => {
        if (onClick) {
            onClick();
        }
    }
    return (
        <div className="option_area" onClick={handleClick}>
            <div className="option_toggle">
                <div className="option_icon">
                    {/* <div className="option_horizontal"></div>
                    <div className="option_vertical"></div> */}
                    <SearchOutlined
                        style={{
                            fontSize: '26px',
                            color: '#0ADACD',
                        }}/>
                </div>
            </div>
            <div className="option_bubble"></div>
        </div>
    );
}

export default ButtonGlow