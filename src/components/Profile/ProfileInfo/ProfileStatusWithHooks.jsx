import React from "react";

const ProfileStatusWithHooks = (props) => {
    
        return (
            <div>
                {true &&
                    <div>
                        <span  style={{fontSize: "12px"}} >{props.status || "----"}</span>
                    </div>
                }
                {false &&
                    <div >
                        <input />
                    </div>
                }
            </div>

        )
    }


export default ProfileStatusWithHooks;