import React from 'react';
import CastItme from './CastItme';
import './css/CastList.scss'
const CastList = ({data,onShow}) => {
    return (
        <ul className='castList'>
            {
                data.map(item=><CastItme key={item.id} item={item} onShow={onShow}/>)
            }
        </ul>
    );
};

export default CastList;