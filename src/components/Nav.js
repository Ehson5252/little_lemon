import { Link } from "react-router-dom"

function Nav() {
    return(
        <>
            <nav>
                <ul className="nav">
                    <li><Link to="home">Home</Link></li>
                    <li><Link to="about">About</Link></li>
                    <li><Link to="#">Menu</Link></li>
                    <li><Link to="reservation">Reservation</Link></li>
                    <li><Link to="#">Order Online</Link></li>
                    <li><Link to="#">Login</Link></li>
                </ul>
            </nav>
        </>
    )
}
export default Nav