import React from 'react';

const CastItme = ({item, onShow}) => {
    const {id, mainImg, actor, isShow , proData} =item
    return (
        <li className={`castItem ${isShow?'on':''}`} onClick={()=>onShow(id)}>
            {/* <strong>{id}</strong> */}
            <div className="pic">
                <img src={mainImg} alt={actor}/>
            </div>
            <h3>{actor}</h3>
        </li>
    );
};

export default CastItme;