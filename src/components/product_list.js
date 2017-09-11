import React, { Component } from 'react';
import ProductBox from './product_box'

class ProductList extends Component {

    render() {
        return(
            <section className="product-list-section">
                <div className="product-list-wrapper">
                    <ProductBox prodName="new product" brand="Brand1" brandSlug="brand-1"/>
                    <ProductBox prodName="ugh" brand="brand2" brandSlug="brand-2"/>
                    <ProductBox prodName="product 3" brand="brand 3" brandSlug="brand-3"/>
                    <ProductBox prodName="proud 4" brand="brand 4" brandSlug="brand-5"/>
                </div>


            </section>
        );
    }
}

export default ProductList;