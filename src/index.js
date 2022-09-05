import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from "./redux/redux-store";
import {Provider} from "react-redux";

const root = ReactDOM.createRoot(document.getElementById('root'));
debugger
let rerenderEntireTree = (state = store.getState()) => {
    root.render(
        <React.StrictMode>
            <Provider store={store}>
                <App store={store}/>
            </Provider>
        </React.StrictMode>
    );
}

rerenderEntireTree(store.getState());

store.subscribe(()=> {
    let state = store.getState()
    rerenderEntireTree()
    console.log(state)
});

reportWebVitals();
