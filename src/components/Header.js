import React from 'react';
import {ReactComponent as MyLogo} from './logo.svg'
import Nav from "./Nav"


function Header() {
    return(
        <>
            <header className="header">
            <div className="logo"><MyLogo /></div>
            <Nav />
            </header>
        </>
    )
}
export default Header