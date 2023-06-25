import { useState } from "react";

const ProTabConFilmoItem = ({ item ,onTrailer, isSelectedId }) => {
    const { id, name, role, date, img, url,place } = item
    return (
        <li className={`proFilmo`}>
            <div className='img'>
                <img src={img} alt={name} />
            </div>
            <div className='txt'>
                <strong>{name}</strong>
                <p>{role}</p>
                <p>{place}</p>
                <p>기간 : {date}</p>
                <em  onClick={()=>onTrailer(id)}>예고편 보기 <i className='xi-angle-down'></i></em>
            </div>
            <div className={`trailer ${isSelectedId.find(item=>item===id)?'on':''}`} >
                <iframe  src={url} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen ></iframe>  
            </div>
        </li>
    );
};

export default ProTabConFilmoItem;