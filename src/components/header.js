import React from "react";
import ReactLogo from "../images/react-logo.png";
import "../../src/main.css";

class Header extends React.Component {
    render() {
        return(
            <nav className="nav-bar">
                <div className="nav-contents">
                    <img src={ReactLogo} className="logoIMage" />
                    <h1 className="reactFacts">React Facts</h1>
                </div>
                
                <h3 className="reactHead">React Course - Project 1</h3>
            </nav>
        )
    }
}

export default Header;