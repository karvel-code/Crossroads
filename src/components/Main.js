import React from "react";

class Main extends React.Component {
    render() {
        return (
            <div className="mainPage">
                <h1 className="mainTitle">Fun Facts About React</h1>
                <ul className="listUl">
                    <li>Was first released in 2013</li>
                    <li>Was originally created by Elvis Kariithi</li>
                    <li>Has well over 100 stars on Github</li>
                    <li>Is maintained by Facebook</li>
                    <li>Powers thousands of enterprise apps including mobile apps</li>
                </ul>
            </div>
        )
    } 
}

export default Main;