import React, { Component } from 'react';
import Profile from './Profile';
import Header from "../layout/Header";
import "./style.css";
class showuser extends Component {

    render() {
        return (
            <div className="index-root">
                <img src="back.jpg" style={{ position: "absolute" }} />
                <div style={{ minWidth: "95%", maxWidth: "95%" }}><Header /></div>
                <Profile />
            </div>
        );
    }
}

export default showuser;