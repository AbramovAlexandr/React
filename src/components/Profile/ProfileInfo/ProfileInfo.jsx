import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import Photo from './../../../assets/images/Profile.jpg'
import ProfileStatusWithHooks from './ProfileStatusWithHooks';

const ProfileInfo = (props) => {
    // if (!props.profile) {
    //     return <Preloader />
    // }

    return (
        <div className={s.descriptionBlock}>
                {props.profile
                    ? <img src={props.profile.photos.large}/>
                    : <img src={Photo}/>
                    }
                
                <div className={s.info}>
                    <h2>Itachi Uchiha</h2>
                    <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
                    <p>City: Konoha</p>
                    <p>Work place: Anbu</p>
                 </div>
        </div>
    )
}

export default ProfileInfo;