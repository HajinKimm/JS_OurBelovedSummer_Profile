import React, { useEffect, useState } from 'react';
import './css/ProView.scss'
import ProViewItem from './ProViewItem';

const ProView = ({show, onView, pic:{img} }) => {
    const {actor, pictur} = show
    return (
        <div className="proView">
            <div className="bigPig"><img src={img} alt={actor} /></div>
            <ul>
                {pictur.map((item)=> <ProViewItem key={item.id} item={item} onView={onView} show={show}/>)}
            </ul>
        </div>
    );
};

export default ProView;