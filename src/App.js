import style from './App.module.scss';
import Header from "./Components/Header/Header";
import Content from "./Content";
import Friends from "./Components/Friends";
import News from "./Components/News";
import Music from "./Components/Music";
import Setting from "./Components/Setting";

import {BrowserRouter, Routes, Route} from "react-router-dom";
import MyPageContainer from "./Components/MyPageContainer";
import MessagesContainer from "./Components/MessagesContainer";

function App(props) {

    return (
        <BrowserRouter>
            <div className={style.wrapper}>
                <div>
                    <Header store={props.store}/>
                </div>
                <div>
                    <Content/>
                </div>
                <div>
                    <Routes>
                        <Route path='/mypage' element={<MyPageContainer store={props.store}/>}/>
                        <Route path='/messages/*' element={<MessagesContainer store={props.store}/>}/>
                        <Route path='/friends' element={<Friends/>}/>
                        {/*<Route path='/news' element={<News/>}/>*/}
                        <Route path='/music' element={<Music/>}/>
                        {/*<Route path='/setting' element={<Setting/>}/>*/}
                    </Routes>
                </div>
            </div>
        </BrowserRouter>

    );
}

export default App;
