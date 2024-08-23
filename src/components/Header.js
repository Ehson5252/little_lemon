import React from 'react';
import {ReactComponent as MyLogo} from './logo.svg'
import Nav from "./Nav"


function Header() {
    return(
        <>
            <header>
            <MyLogo />
            <Nav/>
            </header>
        </>
    )
}
export default Header