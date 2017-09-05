import React, { Component } from 'react';
import ProductBox from './product_box'

class ProductList extends Component {

    render() {
        return(
            <section className="product-list-section">
                <div className="product-list-wrapper">
                    <ProductBox prodName="new product" brand="Brand1"/>
                    <ProductBox prodName="ugh" brand="brand2"/>
                    <ProductBox prodName="product 3" brand="brand 3"/>
                    <ProductBox prodName="proud 4" brand="brand 4"/>
                </div>


            </section>
        );
    }
}

export default ProductList;