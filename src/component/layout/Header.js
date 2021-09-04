import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter, Link, Redirect, Route, Switch } from 'react-router-dom';
import { Layout, Menu } from "antd";
import { Logout } from "../../actions";
import "./style.css";

class top extends Component {
    constructor() {
        super();
        this.state = {
        }
    }
    logout = () => {
        localStorage.clear();
        this.props.Logout();
    }
    render() {
        let menu1 = this.props.auth.user.role === "user" ?
            <div className="btn-group">
                <button type="button" className="btn btn-danger dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                    {this.props.auth.user.name}
                </button>
                <ul className="dropdown-menu">
                    <Link to="/matchup" className="link"><li className="dropdown-item">This Week's Matchups</li></Link>
                    <Link to="/"><li className="dropdown-item">Leaderboard</li></Link>
                    <Link to="/profile"><li className="dropdown-item">My Profile</li></Link>
                    <Link to="/account"><li className="dropdown-item">My Account</li></Link>
                    <Link to="/history"><li className="dropdown-item">Entry History</li></Link>
                    <Link to="/login"><li className="dropdown-item" onClick={() => this.logout()}>log out</li></Link>
                </ul>

            </div>
            :

            <div className="btn-group">
                <button type="button" className="btn btn-danger dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                    {this.props.auth.user.name}
                </button>
                <ul className="dropdown-menu">
                    <Link to="/"><li className="dropdown-item">Leaderboard</li></Link>
                    <Link to="/teammatch"><li className="dropdown-item">Team Match</li></Link>
                    <Link to="/user"><li className="dropdown-item">Manage Users</li></Link>
                    <Link to="/login"><li className="dropdown-item" onClick={() => this.logout()}>log out</li></Link>
                </ul>
            </div>


        let menu2 = (
            <Link to="/login"><button type="button" class="btn btn-danger">Login</button></Link>
        );
        return (
            <div style={{ minWidth: "100%", maxWidth: "100%", height: "100%", display: "flex", justifyContent: "space-between", padding: "10px 0 0 10px" }}>
                <div style={{ marginLeft: "30px", minWidth: "10%", maxWidth: "10%" }}>
                    {/* <i className="fa fa-smile" style={{ color: "white" }} /> */}
                </div>

                {this.props.auth.isAuthenticate ? menu1 : menu2}

            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        auth: state.auth
    };
};
export default connect(
    mapStateToProps, { Logout }
)(top);