import React from 'react';
import MenuItem from './MenuItem';
import './css/MenuList.scss'

const MenuList = ({menu, onMenu}) => {
    return (
        <ul className='menulist'>
            {menu.map(item=><MenuItem key={item.id} item={item} onMenu={onMenu}/>)}
        </ul>
    );
};

export default MenuList;