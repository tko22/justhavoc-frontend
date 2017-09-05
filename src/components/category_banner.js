import React, { Component } from 'react';
import classnames from 'classnames';
import sophie from '../sophie-sollmann-94019.jpg'

class CategoryBanner extends Component {
    constructor(props) {
        super(props);
        this.state ={
            title: props.title,
            img: props.img,
        }
    }
    render() {
        const overlayTitleClass = classnames({'overlay-title':'true','vert-align':'true'});
        const backgroundImgStyle = {
            backgroundImage: 'url(${sophie})',// no-repeat center center fixed
            backgroundSize: "cover",
        };
        return(
            <section className="category-banner">
                <div className="full-background-image">
                    <p className={overlayTitleClass}>{this.state.title}</p>
                </div>
            </section>
        );
    }
}

export default CategoryBanner;