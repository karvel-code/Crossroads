import React from "react";
import ReactLogo from "../images/react-logo.png";

class Header extends React.Component {
    render() {
        return(
            <div>
                <img src={ReactLogo} />
                <h1>Navbar goes in here</h1>
            </div>
        )
    }
}

export default Header;