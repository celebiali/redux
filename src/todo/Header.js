import React from 'react';

function Header({user,setUser}) {

    const loginHandle = user => {
        setUser(user)
    }
    const logoutHandle = () => {
        setUser(false)
    }

    return (
        <header className="header">
            <h2>Logo</h2>
            {!user && (
                <nav>
                    <button onClick={() => loginHandle({id:1,username:'alicelebi'})}>alicelebi</button>
                    <button onClick={() => loginHandle({id:2,username:'user'})}>user</button>
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