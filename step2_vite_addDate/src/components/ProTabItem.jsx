import React from 'react';

const ProTabItem = ({item, onProfile}) => {
    const {id, title, isProfile}= item
    return (
        <li className={isProfile?'on':''} onClick={()=>onProfile(id)}>
            {title}
        </li>
    );
};

export default ProTabItem;