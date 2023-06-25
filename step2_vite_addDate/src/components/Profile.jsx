import React from 'react';
import ProView from './proView';
import ProTab from './ProTab';
import './css/Profile.scss'

const Profile = ({show, onProfile, onView, pic,num, profileMenu ,onTrailer ,isSelectedId}) => {
    return (
        <div className="profile">
            <ProView show={show} onView={onView} pic={pic}/>
            <ProTab show={show} onProfile={onProfile} num={num} profileMenu={profileMenu} onTrailer={onTrailer} isSelectedId={isSelectedId}/>
        </div>
    );
};

export default Profile;