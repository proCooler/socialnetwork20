import style from '../../App.module.scss';
import NavButton from "./NavButton";


const Header = (props) => {

    let store = props.store.getState()

    const nButton = store.navbar.navbuttons.map(n => <NavButton name={n.name} link={n.link}/>)

    return (
        <div className={style.header}>
            <div className={style.logo}>
                <img src="headerlogo.png"/>
            </div>
            <div>
                <h1>React App</h1>
            </div>
            <div>
                {nButton}
            </div>


        </div>
    )
}

export default Header