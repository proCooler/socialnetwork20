import React from "react";
import style from "./../App.module.scss"
import DialogItem from "./DialogItem";
import MessageItem from "./MessageItem";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../redux/dialogs-reducer";


const Messages = (props) => {

    const dialogsElement = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    const messagesElement = props.state.messages.map(m => <MessageItem text={m.text}/>)

    let textar = React.createRef()

    const onSendMessageClick = () => {
        props.onSendMessageClick()
    }
    const OnNewMessageChange = () => {
        let body = textar.current.value
        props.OnNewMessageChange(body)
    }
    return (
        <div className={style.messagesBody}>
            <div>
                {dialogsElement}
            </div>
            <div>
                {messagesElement}
            </div>
            <div>
                <div>
                    <textarea
                        ref={textar}
                        rows={3} cols={40}
                        value={props.state.newMessageBody}
                        onChange={OnNewMessageChange}
                        placeholder="Введите ваше сообщение"/>
                </div>
                <div>
                    <button onClick={onSendMessageClick}>Send -></button>
                </div>
            </div>
        </div>
    );
};

export default Messages

