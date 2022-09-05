import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import navbarReducer from "./navbar-reducer";

let store = {
    _state: {
        profilePage: {
            postItem: [
                {id: 1, text: "Привет", likesCount: 17},
                {id: 2, text: "Как дела?", likesCount: 2},
            ],
            newPostText: 'it-kamasutraaaa',
            statusProfile: "asd",
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Максим'},
                {id: 2, name: 'Сергей'},
                {id: 3, name: 'Витя'},
                {id: 4, name: 'Николай'},
                {id: 5, name: 'Света'},
                {id: 6, name: 'Анна'},
                {id: 7, name: 'Ко нстантин'}
            ],
            messages: [
                {id: 1, text: "Привет!"},
                {id: 2, text: "Как дела?"},
                {id: 3, text: "Ого! На чем пишешь?"},
                {id: 4, text: "Какие библиотеки используешь?"},
                {id: 5, text: "Это который SPA?"},
                {id: 6, text: "Удачи!"}
            ],
            newMessageBody: ''
        },
        navbuttons: [
            {id: 1, name: "My Page", link: "/mypage"},
            {id: 2, name: "Messages", link: "/messages"},
            {id: 3, name: "Friends", link: "/friends"},
            {id: 4, name: "Music", link: "/music"},
            {id: 5, name: "News", link: "/news"},
            {id: 6, name: "Setting", link: '"/setting"'},
        ],



    },
    _callSubscriber() {
        console.log('State changed')
    },

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sidebar = navbarReducer(this._state.dialogsPage, action)

        this._callSubscriber(this._state)
    }
}

export default store;
window.store = store;