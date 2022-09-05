import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../redux/profile-reducer";
import MyPage from "./MyPage";

const MyPageContainer = (props) => {
debugger
    let state = props.store.getState()

    const addPost = () => {
        props.store.dispatch(addPostActionCreator())

    };
    const newPostTextBody = (text) => {
        let action = updateNewPostTextActionCreator(text)
        props.store.dispatch(updateNewPostTextActionCreator(text))
    };

    return (<MyPage addPost={addPost} updateNewPostText={newPostTextBody} state={state.profilePage} />)
}

export default MyPageContainer