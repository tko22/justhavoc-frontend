import React, { Component } from 'react';
import CategoryBanner from './category_banner'
import Sorter from './sorter'

class ProductPage extends Component {
    render() {
        return(
            <section className="product-list-section">
                <CategoryBanner />
                <Sorter/>
                <h1>hi</h1>
            </section>

        );
    }
}


export default ProductPage;