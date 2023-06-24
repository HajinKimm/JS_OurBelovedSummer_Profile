import React from 'react';

const CastItme = ({item}) => {
    const {id, name, imgUrl,role} =item
    return (
        <li className="castItem">
            <strong>{id}</strong>
            <div className="pic">
                <img src={imgUrl} alt={name} /> 
            </div>
            <h3>{name}</h3>
        </li>
    );
};

export default CastItme;