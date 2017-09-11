import React, { Component } from 'react';
import classnames from 'classnames';
import tobias from '../../tobias-van-schneider-310434.jpg'
import { Route, Link } from 'react-router-dom'

class BrandBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            brandName: props.name,
            brandDescription: props.description,
            brandLogoURL: props.logoURL,
            brandSlug: props.slug,
        };
        this.BrandLink = "/brands/" + this.state.brandSlug;
    }
    render() {
        const brandBoxClass = classnames({'brand-box':'true','col-lg-3':'true',
            'col-md-4':'true','col-sm-6':'true','col-xs-12':'true'});
        return(
            <Link to={this.BrandLink}>
                <div className={brandBoxClass}>
                    <div className="fixed-height-img-wrapper">
                        <img className="max-width-img" src={tobias}/>
                    </div>
                    <div className="caption">
                        <p className="product-name">{this.state.brandName}</p>
                        <p>This is the description tha blahnsldf ablhas lab bla asdf lhablsdh balah asdf asdfasdf asdf</p>
                    </div>
                </div>
            </Link>
        );
    }
}

export default BrandBox;