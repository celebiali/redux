import {useDispatch, useSelector} from "react-redux";
import {logoutHandle,loginHandle} from "../utils";
import { changeThemes} from "../stores/changeTheme"


import React from 'react';
function Header() {
    const dispatch = useDispatch();
    const {user} = useSelector(state => state.auth)

    const login = user => {
        loginHandle(user)
    }
    const isDark = changeThemes.activeTheme === "dark";

     const handleChangeTheme = () => {
        if (isDark) {
            dispatch(changeThemes("light"));
          } else {
            dispatch(changeThemes("dark"));
          }
    }
  
    return (
        <header className="header">
                <div className="container" >
            <div className="d-flex justify-content-between">
        <button className="btn btn-primary" onClick={handleChangeTheme}>
          {isDark ? "Light Theme" : "Dark Theme"}
        </button>
        <p className="mt-3">Current theme is {isDark} </p>
      </div>
            <h2>TRLogo</h2>
            {!user && (
                <nav>
                    <button onClick={() => login({id:1,username:'alicelebi'})}>alicelebi</button>
                    <button onClick={() => login({id:2,username:'user'})}>user</button>
                </nav>
                )}
            {
                user && (
                    <nav>
                        Hoşgeldin, {user.username}
                        <button onClick={logoutHandle}>Çıkış yap</button>
                    </nav>
                )
            }
                </div>
        </header>
    );
}

export default Header;