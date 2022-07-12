import {Link} from 'react-router-dom';


import "./Navbar.css";
import { Logo, MainNavbar, NavButton, NavContainer, NavItems } from "./NavbarStyles"



const Navbar = ({hides}) => {
    return (
        <MainNavbar>
            <NavContainer>
                <Link to="/">
                    <Logo>
                        mySpace
                    </Logo>
                </Link>
                <NavItems>
                    <Link to="register"><NavButton hides={hides}>Register</NavButton></Link>
                    <Link to="signin"><NavButton hides={hides}>Log In</NavButton></Link>
                </NavItems>
            </NavContainer>
        </MainNavbar>
    )
}

export default Navbar