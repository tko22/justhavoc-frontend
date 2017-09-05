import React, { Component } from 'react';
import CategoryBanner from '../category_banner'
import BrandList from './brand_list'

class BrandListPage extends Component {
    render() {
        return(
            <section className="main-content-section">
                <CategoryBanner title="Brands" img=""/>
                <BrandList/>
            </section>

        );
    }
}

export default BrandListPage;