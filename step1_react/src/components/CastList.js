import React from 'react';
import CastItme from './CastItme';

const CastList = ({data}) => {
    return (
        <ul className='castList'>
            {
                data.map(item=><CastItme key={item.id} item={item}/>)
            }
        </ul> 
    );
};

export default CastList;