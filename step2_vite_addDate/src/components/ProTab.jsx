import React from 'react';
import ProTabContent from './ProTabContent';
import ProTabItem from './ProTabItem';
import './css/ProTab.scss'
const ProTab = ({onProfile, num ,show, profileMenu, onTrailer, isSelectedId}) => {
    return (
        <div className='proTab'>
            <ul className='proTabMenu'>
                {
                    profileMenu.map(item=><ProTabItem key={item.id} item={item} onProfile={onProfile}/>)
                }
            </ul>
            {

            }
            <ProTabContent num={num} show={show} onTrailer={onTrailer} isSelectedId={isSelectedId}/>
        </div>
    );
};

export default ProTab;