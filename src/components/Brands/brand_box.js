import React, { Component } from 'react';
import classnames from 'classnames';
import tobias from '../../tobias-van-schneider-310434.jpg'

class BrandBox extends Component {
    render() {
        const brandBoxClass = classnames({'brand-box':'true','col-lg-3':'true',
            'col-md-4':'true','col-sm-6':'true','col-xs-12':'true'});

        return(
            <div className={brandBoxClass}>

                <div className="fixed-height-img-wrapper">
                    <img className="max-width-img" src={tobias}/>
                </div>
                <div className="caption">
                    <p className="product-name">Brand</p>
                    <p>This is the description tha blahnsldf ablhas lab bla asdf lhablsdh balah asdf asdfasdf asdf</p>
                </div>
            </div>
        );
    }
}

export default BrandBox;