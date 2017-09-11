import React, { Component } from 'react';
import classnames from 'classnames';
import BrandBox from './brand_box'

class BrandList extends Component {
    render() {
        return(
            <section className="brand-list-section">
                <div className="container-fluid">
                    <div className="row">
                        <div className="side-top-offset">
                            <BrandBox name="brand 1" slug="brand-1"/>
                            <BrandBox name="brand 2" slug="brand-2"/>
                            <BrandBox name="brand 5" slug="brand-5"/>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default BrandList;