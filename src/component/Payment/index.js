import React, { Component } from 'react';
import Account from './Account';
import Header from "../layout/Header";
import "./style.css";
class showuser extends Component {

    render() {
        return (
            <div className="index-root">
                <img src="back.jpg" style={{ position: "absolute" }} />
                <div style={{ minWidth: "95%", maxWidth: "95%" }}><Header /></div>
                <Account />
            </div>
        );
    }
}

export default showuser;