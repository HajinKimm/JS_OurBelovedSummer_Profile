import React from 'react';

const ProTabConInfo = ({ proData, show }) => {
    const { act,birth ,agency,academy,debut,premier} = proData[1]
    const {actor}=show
    return (
        <li className={`proInfo`}>
            <h3>{actor} </h3>
            <span>{act}</span> 
            <table>
                <colgroup>
                    <col className='w1'/>
                    <col className='w2'/>
                </colgroup>
                <tbody>
                    <tr>
                        <td>소속사</td>
                        <td>{agency}</td>
                    </tr>
                    <tr>
                        <td>출생</td>
                        <td>{birth}</td>
                    </tr>
                    <tr>
                        <td>학력</td>
                        <td>{academy}</td>
                    </tr>
                    <tr>
                        <td>데뷔</td>
                        <td>{debut}</td>
                    </tr>
                    <tr>
                        <td>수상</td>
                        <td  style = {{ whiteSpace: 'pre-line'}}>{premier}</td>
                    </tr>
                </tbody>
            </table>
        </li>
    );
};

export default ProTabConInfo;