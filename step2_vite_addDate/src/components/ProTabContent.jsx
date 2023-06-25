import React from 'react';
import ProTabConRole from './ProTabConRole.jsx';
import ProTabConInfo from './ProTabConInfo.jsx';
import ProTabConFilmo from './ProTabConFilmo.jsx';
import './css/ProTabCon.scss'


const ProTabContent = ({show:{proData}, num, show, onTrailer, isSelectedId}) => {

    return (
        <div className='proTabContent'>
            <ul>
                { num === 1 &&  <ProTabConRole proData={proData} />}
                { num === 2 && <ProTabConInfo proData={proData} show={show}/> }
                { num === 3 && <ProTabConFilmo proData={proData} onTrailer={onTrailer} isSelectedId={isSelectedId}/> }
            </ul>
            
        </div>
    );
};

export default ProTabContent;