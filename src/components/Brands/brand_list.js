import React, { Component } from 'react';
import classnames from 'classnames';
import BrandBox from './brand_box'

class BrandList extends Component {
    render() {
        return(
            <section className="brand-list-section">
                <div className="container-fluid">
                    <div className="row">
                        <div className="top-offset">
                            <BrandBox/>
                            <BrandBox/>
                            <BrandBox/>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default BrandList;