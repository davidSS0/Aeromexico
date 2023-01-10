import React from 'react';

const Radio = ({ change, name, value, titleInput }) => {
    return (
        <div className="input row-50 gap">
            <div className="flex row">
            <input
                onChange={change} 
                name={name}
                type="radio"
                value={value} />
            <p>{titleInput}</p>
            </div>
        </div>
    );
}

export default Radio;
