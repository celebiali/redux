import {useSelector} from "react-redux";
import {logoutHandle,loginHandle} from "../utils";
import React from 'react';
function Header() {
    const {user} = useSelector(state => state.auth)

    const login = user => {
        loginHandle(user)
    }

    return (
        <header className="header">
            <h2>Logo</h2>
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
        </header>
    );
}

export default Header;