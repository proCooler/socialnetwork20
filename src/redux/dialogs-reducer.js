const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body) =>
    ({type: UPDATE_NEW_MESSAGE_BODY, newMessage: body})

let initialState = {
    dialogs: [
        {id: 1, name: 'Максим'},
        {id: 2, name: 'Сергей'},
        {id: 3, name: 'Витя'},
        {id: 4, name: 'Николай'},
        {id: 5, name: 'Света'},
        {id: 6, name: 'Анна'},
        {id: 7, name: 'Константин'}
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
}

const dialogsReducer = (state= initialState, action) => {

    if (action.type === UPDATE_NEW_MESSAGE_BODY) {
        state.newMessageBody = action.newMessage;
    } else if (action.type === SEND_MESSAGE) {
        let body = state.newMessageBody;
        state.newMessageBody = '';
        state.messages.push({id: 6, text: body})
    }

    return state;
}

export default dialogsReducer