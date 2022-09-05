import style from "./../App.module.scss"
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {

    let path = "/messages/" + props.id

    return (
        <div className={style.dialogItem}>
            <img src="ava5.jpeg"/>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem;
