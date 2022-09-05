import React from "react";
import Messages from "./Messages";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../redux/dialogs-reducer";


const MessagesContainer = (props) => {

    let state = props.store.getState()

    const onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator())
    }
    const OnNewMessageChange = (body) => {
        props.store.dispatch(updateNewMessageBodyCreator(body))
    }
    return (<Messages onSendMessageClick={onSendMessageClick} OnNewMessageChange={OnNewMessageChange} state={state.dialogsPage}/>);
};

export default MessagesContainer

