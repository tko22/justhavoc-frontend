import React, { Component } from 'react';


class ErrorPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            errorMsg: props.msg,
        };
    }
    render() {
        return(
            <div className="main-content-section">
                <div className="container">
                    <div className="message-wrapper">
                        {this.state.errorMsg}
                    </div>
                </div>
            </div>
        );
    }
}
export default ErrorPage;