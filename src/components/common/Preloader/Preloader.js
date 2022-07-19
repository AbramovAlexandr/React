import React from 'react';
import preloader from "../../../assets/images/preloader.svg";

let Preloader = (props) => {
    return <div  style={ { backgroundColor: 'white', width: '200px', margin: '25px 0 0 25px'}}>
        <img src={preloader} />
    </div>
}

export default Preloader;