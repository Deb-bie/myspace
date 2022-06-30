import "./Navbar.css"



const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navContainer">
                <div className="logo">
                    Zubi
                    <span>.com</span>
                </div>
                <div className="navItems">
                    <button className="navButton">Register</button>
                    <button className="navButton">Log in</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar