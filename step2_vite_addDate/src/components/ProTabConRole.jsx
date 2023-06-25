import React from 'react';

const ProTabConRole = ({ proData }) => {
    const {role, roleAge, txt, des1, des2} = proData[0]
    return (
        <li className={`proRole`}>
            <h3>{role} <span>({roleAge}세)</span></h3>
            <strong>{txt}</strong>
            <span style = {{ whiteSpace: 'pre-line'}}>{des1}</span>
            <p style = {{ whiteSpace: 'pre-line'}}>{des2 }</p>
        </li>
    );
};

export default ProTabConRole;