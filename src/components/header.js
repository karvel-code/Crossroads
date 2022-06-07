import React from "react";
import ReactLogo from "../images/react-logo.png";

class Header extends React.Component {
    render() {
        return(
            <div>
                <img src={ReactLogo} />
                <h1>React Facts</h1>
                <h4>React Course - Project 1</h4>
            </div>
        )
    }
}

export default Header;