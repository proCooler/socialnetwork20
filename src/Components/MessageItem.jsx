import style from "./../App.module.scss"

const MessageItem = (props) => {
    return (
            <div className={style.messagesItem}>
                <img src="ava2.jpg"/> {props.text}
            </div>
    )
}

export default MessageItem;
