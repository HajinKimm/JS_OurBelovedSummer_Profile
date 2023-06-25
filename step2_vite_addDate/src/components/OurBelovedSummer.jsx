import React, { useEffect, useState } from 'react';
import CastList from './CastList.jsx';
import './css/OurBelovedSummer.scss'
import CastData from '../assets/api/CastData.js'
import Profile from './Profile.jsx';
import MenuList from './MenuList.jsx';

const menus = [
    { id: 1, name: '모든 인물', category: 'all', isClass: true },
    { id: 2, name: '주요 인물', category: 'major', isClass: false },
    { id: 3, name: '그외의 인물', category: 'other', isClass: false },
]

const profileMenus = [
    { id: 1, title: '드라마 역할소개', category: 'role', isProfile: true },
    { id: 2, title: '프로필', category: 'profile', isProfile: false },
    { id: 3, title: '작품활동', category: 'filmography', isProfile: false },
]

const Main = () => {
    const [data, setData] = useState(CastData)
    const [menu, setMenu] = useState(menus)
    const [profileMenu, setProfileMenus] = useState(profileMenus)
    const [show, setShow] = useState(data[0])
    const [pic, setPic] = useState(show.pictur[0])
    const [num, setNum] = useState(1)
    const [isSelectedId, setIsSelectedId] = useState([])


    //상단 메뉴
    const onMenu = (category) => {
        setMenu(menu.map(item => item.category === category ? { ...item, isClass: true } : { ...item, isClass: false }))
        setProfileMenus(profileMenus)
        setNum(1)
        if (category === 'all') {
            setData(CastData.map((item, idx) => idx === 0 ? { ...item, isShow: true } : { ...item, isShow: false }))
            setShow(CastData.find((item, idx) => idx === 0))
            setPic(CastData.find((item, idx) => idx === 0).pictur[0])
            setIsSelectedId(1)

        } else {
            const castDataFilter = CastData.filter(item => item.category === category)
            setData(castDataFilter.map((item, idx) => idx === 0 ? { ...item, isShow: true } : { ...item, isShow: false }))
            setShow(castDataFilter.find((item, idx) => idx === 0))
            setPic(castDataFilter.find((item, idx) => idx === 0).pictur[0])
            setIsSelectedId(castDataFilter.find((item, idx) => idx === 0).id)
        }
    }
    //화면에 보이는 프로필 정보
    const onShow = (id) => {
        setData(data.map(item => item.id === id ? { ...item, isShow: true } : { ...item, isShow: false }))
        setShow(data.find(item => item.id === id))
        setPic(data.find((item) => item.id === id).pictur[0])
        setProfileMenus(profileMenu.map((item, idx) => idx === 0 ? { ...item, isProfile: true } : { ...item, isProfile: false }))
        setIsSelectedId(id)
        setNum(1)
    }
    //사진 리스트 클릭시 가장 큰사진 변경
    const onView = (id) => {
        setPic(show.pictur.find(item => item.id === id))
    }
    //프로필 정보 메뉴
    const onProfile = (id) => {
        setProfileMenus(profileMenu.map(item => item.id === id ? { ...item, isProfile: true } : { ...item, isProfile: false }))
        setNum(id)
        setIsSelectedId([])
    }
    
    //예고편 보기
    const onTrailer = (id) => {
        if(isSelectedId.find(item=>item === id)){
            setIsSelectedId(isSelectedId.filter(item=>item !== id))
        }else{
            setIsSelectedId([...isSelectedId, id])
        }
    }
    return (
        <div>
            <div className="wrap">
                <header className='header'>
                    <div className="inner">
                        <h2>그 해 우리는  <span>(등장인물)</span>
                        </h2>
                        <MenuList onMenu={onMenu} menu={menu} />

                    </div>
                </header>

                <section className='content'>
                    <div className="inner">
                        <CastList data={data} onShow={onShow} />
                    </div>
                </section>
                <section className='conInfo'>
                    <div className="inner">
                        <Profile show={show} onProfile={onProfile} onView={onView} pic={pic} num={num} profileMenu={profileMenu} onTrailer={onTrailer} isSelectedId={isSelectedId} />
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Main;