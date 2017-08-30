import React, { Component } from 'react';
import classnames from 'classnames';

class Footer extends Component {
    render() {
        const newsletterSignupWrapper = classnames({'col-md-4':'true','col-sm-10':'true'})
        return (
            <footer className="footer-wrapper">
                <div className="container-fluid">
                    <div className="row">
                        <div className={newsletterSignupWrapper}>
                            <form className="form-inline" action="#">

                            </form>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}



export default Footer;