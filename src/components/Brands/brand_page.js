import React, { Component } from 'react';
import ErrorPage from "../error_page"


class BrandPage extends Component {
    constructor(props) {
        super(props);

        this.temparry = ['brand-1','brand-2','brand-5']; //array to check whether brand exists in database
    }
    checkBrand() {

        if(this.temparry.indexOf(this.props.match.params.brand.toLowerCase()) >= 0){
            return  <h1>{this.props.match.params.brand}</h1>;
        }
        else {
            return <ErrorPage msg="This brand isn't on this website! Request to add this brand below!"/>;
        }
    }
    render() {

        return(
            <section className="main-content-section">
                {this.checkBrand()}
            </section>
        );
    }
}



export default BrandPage;