import React from 'react';

const MenuItem = ({item, onMenu}) => {
    const { name, category, isClass} = item
    return (
        <li  className={isClass?'on':''} onClick={()=>onMenu(category)}>
            <strong>{name}</strong>
        </li>
    );
};

export default MenuItem;