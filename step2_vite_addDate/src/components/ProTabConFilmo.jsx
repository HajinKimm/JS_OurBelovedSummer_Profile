import React from 'react';
import ProTabConFilmoItem from './ProTabConFilmoItem';

const ProTabConFilmo = ({ proData, onTrailer ,isSelectedId }) => {
    const { fimoData } = proData[2]

    return (
        < >
            {
                fimoData.map(item => <ProTabConFilmoItem key={item.id} item={item} onTrailer={onTrailer} isSelectedId={isSelectedId}/>)
            }
        </>
    );
};

export default ProTabConFilmo;