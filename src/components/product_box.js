import React, { Component } from 'react';
import suit from '../dane-deaner-334260.jpg'
import classnames from 'classnames';
import { Route, Link } from 'react-router-dom'

class ProductBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            productName: props.prodName,
            // productDescription: props.description,
            productBrand: props.brand,
            productImg: props.img,
            // productBrandLogo: props.logo,
            // productPrice: props.price,
        };
        this.BrandLink = "/brands/" + this.state.productBrand
    }
    render() {
        const productBoxClass = classnames({'product-box':'true'});
        return(
            <Link to="/hello">
                <div className={productBoxClass}>
                    <div className="product-box-brand-title">
                        <div className="product-box-brand-logo">
                            <Link to={this.BrandLink}><img src="http://www.cheerscreative.com/wp-content/uploads/2014/12/gap-logo-300x300.jpg" alt="logo of JustHavoc"id="App-logo" width="40" height="40"/></Link>
                        </div>
                        <div className="product-box-brand-wrapper">
                            <Link to={this.BrandLink}>{this.state.productBrand}</Link>
                        </div>
                    </div>
                    <div className="product-grid-img-wrapper">
                       <img className="max-width-img" src={suit}/>
                    </div>
                    <div className="caption">
                        <p className="product-name">{this.state.productName}</p>
                        <p>This is the description tha blahnsldf ablhas lab bla asdf lhablsdh balah asdf asdfasdf asdf</p>
                        <p>$4.00</p>
                    </div>
                </div>
            </Link>

        );
    }
}

export default ProductBox;