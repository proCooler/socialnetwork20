import style from "../../App.module.scss";
import {NavLink} from "react-router-dom";

const NavButton = (props) => {
    return (
        <button className={style.button}>
            <NavLink to={props.link}>{props.name}</NavLink>
        </button>



    )
}

export default NavButton