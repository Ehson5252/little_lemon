import React from 'react';
import {ReactComponent as MyLogo} from './logo.svg'
import { Link } from 'react-router-dom';

import Nav from "./Nav"


function Header() {
    return(
        <>
            <header className="header">
                <Link to="home" className="logo">
                    <MyLogo />
                </Link>
                <Nav />
            </header>
        </>
    )
}
export default Header