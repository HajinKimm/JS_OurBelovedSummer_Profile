import React, { useState } from 'react';
import CastList from './CastList.js';
import '../assets/css/style.scss'
import CastData from '../assets/api/CastData.js'

const Main = () => {
    const [data, setData] = useState(CastData) 
    return (
        <div>
            <div className="wrap">
                <section className='content'>
                    <div className="inner">
                        
                        <h2><img src="./images/main_miniposter.png" alt="" />그 해 우리는</h2>
                        <CastList data={data}/>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Main;