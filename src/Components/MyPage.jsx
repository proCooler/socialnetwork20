import React from "react";
import style from "./../App.module.scss"
import Post from "./Post";
import MyPageStatus from "./MyPageStatus";

const MyPage = (props) => {

    const postItem = props.state.postItem.map(p => <Post name={p.name} text={p.text} likesCount={p.likesCount}/>)

    let textar = React.createRef()

    const onAddPost = () => {
        props.addPost();

    };
    const onNewPostTextBody = () => {
        let text = textar.current.value;
        props.updateNewPostText(text);
    };

    return (
        <div className={style.contentProfile}>
            <div className={style.profileCard}>
                <div className={style.ava}>
                    <img width={100} height={100} src="ava.png" alt="ava"/>
                </div>
                <div>
                    <p>Дворников Максим Юрьевич</p>
                    <p>Дата рождения: 21 декабря 1990 года (31 год)</p>
                    <p>Город: Полевской</p>
                    <p>Должность: Системный администратор</p>
                </div>
                <div className={style.shareItem}>
                    <div>
                        <MyPageStatus state={props.state}/>
                    </div>
                    <div>
                        <textarea
                            value={props.state.newPostText}
                            ref={textar}
                            onChange={onNewPostTextBody}
                            placeholder="Поделись с друзьями"
                            rows={3} cols={40}/>
                        <div>
                            <button onClick={onAddPost}>Поделиться</button>
                        </div>
                    </div>

                </div>
            </div>
            <div>
                <h1>MyPosts</h1>
                <div>
                    {postItem}
                </div>
            </div>
        </div>
    )
}

export default MyPage