import style from "./../App.module.scss"

const Post = (props) => {

    return (
        <div>
            <div className={style.postitem}>
                <img width={50} height={50} src="ava.png" alt="ava"/>
                {props.text}
                <div><img width={24} height={24} src="liked.svg" alt="liked"/>
                    {props.likesCount}
                </div>
            </div>
        </div>
    )
}

export default Post