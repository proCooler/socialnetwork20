
let initialState = {
  navbuttons: [
    {id: 1, name: "My Page", link: "/mypage"},
    {id: 2, name: "Messages", link: "/messages"},
    {id: 3, name: "Friends", link: "/friends"},
    {id: 4, name: "Music", link: "/music"},
    {id: 5, name: "News", link: "/news"},
    {id: 6, name: "Setting", link: '"/setting"'},
  ]
}
const navbarReducer = (state = initialState, action) => {

  return state;
}

export default navbarReducer