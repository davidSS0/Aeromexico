import React from 'react';

const Select = ({ title, change, name }) => {
    return (
        <div className="input row-50 gap">
            <label>{title}</label>
            <select  className="input-data" onChange={change} name={name}>
                <option value="Gryffindor">Gryffindor</option>
                <option value="Slytherin">Slytherin</option>
                <option value="Hufflepuff">Hufflepuff</option>
                <option value="Ravenclaw">Ravenclaw</option>
            </select>
        </div>
    );
}

export default Select;
