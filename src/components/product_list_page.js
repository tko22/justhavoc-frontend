import React, { Component } from 'react';
import CategoryBanner from './category_banner'
import Sorter from './sorter'
import ProductList from './product_list'

class ProductListPage extends Component {
    render() {
        return(
            <section className="main-content-section">
                <CategoryBanner title="AUTHENTIC AND UNIQUE" img="chelsea-francis-3458.jpg"/>
                <Sorter/>
                <ProductList/>
            </section>

        );
    }
}


export default ProductListPage;