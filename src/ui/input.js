import React from 'react';

const Input = ({ title,change,name }) => {
    return (
        <div className="input row-50 gap">
            <label>{title}</label>
            <input type="text" className="input-data" onChange={change} name={name} />
        </div>
    );
}

export default Input;
