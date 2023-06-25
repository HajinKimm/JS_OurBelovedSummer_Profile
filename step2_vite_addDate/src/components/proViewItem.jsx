import React from 'react';

const ProViewItem = ({item, onView, show}) => {
    const {id, img}=item
    return (
        <li onClick={()=>onView(id)}>
            <img src={img} alt={show.actor} />
        </li>
    );
};

export default ProViewItem;