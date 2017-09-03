import React, { Component } from 'react';
import classnames from 'classnames';

class CategoryBanner extends Component {
    render() {
        const overlayTitleClass = classnames({'overlay-title':'true','vert-align':'true'});
        return(
            <section className="category-banner">
                <div className="full-background-image">
                    <p className={overlayTitleClass}>AUTHENTIC AND UNIQUE</p>
                </div>
            </section>
        );
    }
}

export default CategoryBanner;