import React, { Component } from 'react';
import ErrorPage from "../error_page"


class BrandPage extends Component {
    constructor(props) {
        super(props);
        this.temparry = ['brand1','brand2','brand5'];
    }
    checkBrand() {

        console.log(this.temparry.indexOf(this.props.match.params.brand));
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