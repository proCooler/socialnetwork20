import React from "react";


const MyPageStatus = (props) => {
debugger
    return (
        <div>
            <div>
                <span>Мой статус< /span>
            </div>
            <div>
                <input value={props.status}/>
            </div>
        </div>
    )
}

export default MyPageStatus