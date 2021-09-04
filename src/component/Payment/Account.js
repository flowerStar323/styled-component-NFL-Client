import { Card, notification, Input, DatePicker } from 'antd';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { editprofile } from "../../actions";
import { getClearDate } from "../getClearDate";
import moment from "moment";
const jwt = require("jsonwebtoken");

class index extends Component {
    constructor() {
        super();
        this.state = {
            cardnumber: "",
            ex_date: getClearDate(new Date(Date.now())),
            name: "",
            amount: "",
            cvv: ""
        }
    }
    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }
    render() {

        return (

            <div className="payment_root">
                <div className="user-header-text">
                    Payment with Stripe
                </div>
                <Card style={{
                    minWidth: "50%", minHeight: "90%", maxWidth: "50%", maxHeight: "90%", borderRadius: "20px"
                }}
                >
                    <div className="payment_RightDiv">
                        <div className="payment_Right-Container">
                            <div className="payment_Log-Input">
                                <div className="payment_Log-Input-Container">
                                    <div className="payment_email-content">
                                        CARD NUMBER :
                                    </div>
                                    <div>
                                        <Input
                                            size="large"
                                            name="cardnumber"
                                            value={this.state.cardnumber}
                                            onChange={(e) => this.onChange(e)}
                                            placeholder="Type your number here........" className="payment_email-input" />
                                    </div>
                                </div>
                                <div className="exriration-data-cvv-container">
                                    <div style={{ width: "40%" }}>
                                        <div className="payment_email-content">
                                            EXPIRATION DATE :
                                        </div>
                                        <div>
                                            <DatePicker
                                                size="large"
                                                name="ex_date"
                                                value={moment(this.state.ex_date)}
                                                onChange={(e, i) => this.setState({ ex_date: i })} placeholder="E-mail here........"
                                                className="CVV-container" />
                                        </div>
                                    </div>
                                    <div style={{ width: "55%" }}>
                                        <div className="payment_email-content">
                                            CVV :
                                        </div>
                                        <div>
                                            <Input
                                                size="large"
                                                name="cvv"
                                                value={this.state.cvv}
                                                onChange={(e) => this.onChange(e)}
                                                className="CVV-container" />
                                        </div>
                                    </div>

                                </div>
                                <div className="payment_Log-Input-Container">
                                    <div className="payment_email-content">
                                        CARD HOLDER NAME :
                                    </div>
                                    <div>
                                        <Input
                                            size="large"
                                            name="name"
                                            value={this.state.name}
                                            onChange={(e) => this.onChange(e)}
                                            placeholder="Type your name here........" className="payment_email-input" />
                                    </div>
                                </div>
                                <div className="payment_Log-Input-Container">
                                    <div className="payment_email-content">
                                        AMOUNT :
                                    </div>
                                    <div>
                                        <Input
                                            size="large"
                                            name="amount"
                                            value={this.state.amount}
                                            onChange={(e) => this.onChange(e)} className="payment_email-input" />
                                    </div>
                                </div>

                            </div>
                            <div className="payment_Login-Button">
                                <div>CONFIRM PAYMENT</div>
                            </div>
                        </div>
                    </div>
                </Card >
            </div >

        );
    }
}
const mapStateToProps = state => {
    return {

    };
};
export default connect(
    mapStateToProps, { editprofile }
)(index);