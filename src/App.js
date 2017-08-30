import React, { Component } from 'react';
import sophie from './sophie-sollmann-94019.jpg'
import suit from './dane-deaner-334260.jpg'
import hang from './igor-ovsyannykov-174012.jpg'
import pete from './pete-bellis-256701.jpg'
import brook from './brooke-cagle-65599.jpg'
import './App.css';
import { Button, Row } from 'react-bootstrap'
import Header from "./components/header";
import classnames from 'classnames';
import { Route, Link } from 'react-router-dom'
import ProductList from "./components/product_list"
import AboutUs from "./components/about-us"
import Footer from "./components/footer"
import Profile from "./components/profile"
import Search from "./components/search"


class App extends Component {
  render() {
    return (
      <section className="App">
          <Header/>
          <main>
              <Route exact path="/" component={Main} />
              <Route exact path="/clothing" component={ProductList} />
              <Route exact path="/others" component={ProductList} />
              <Route exact path="/about-us" component={AboutUs} />
              <Route exact path="/profile" component={Profile} />
              <Route exact path="/search" component={Search} />
          </main>
          <Footer/>
      </section>
    );
  }
}

class Main extends Component {

    render() {
        return (
          <div className="main-content">
              <div className="container">
                  <FrontPageIntro />
              </div>
              <FrontPagePitch />
              <FrontPageSecondary />
              <FrontPageWideProduct />
          </div>
        );
    }
}
class FrontPageIntroMain extends Component {
    constructor(props) {
        super(props);
    }
    render () {
        const carouselClass = classnames({'carousel':'true','img-shadow':'true'})
        return (
            <div className="mainCarousel">
                <div className={carouselClass}>
                    <div className="carousel-item">
                        <img className="max-width-img" src={sophie} />
                    </div>
                </div>
            </div>
        );
    }
}
class FrontPageIntro extends Component {
    render() {
        return (
            <div className="home-intro">
                <div className="row">
                    <FrontPageIntroMain/>
                </div>
            </div>
        );
    }
}
class FrontPagePitch extends Component {

    render() {
        return (
            <section className="info-section">
                <div className="container-fluid">
                    <div className="row">
                        <div className="home-pitch">
                            <p className="intro-content">Find unique and authentic products</p>
                            <p className="detail-content">Buffer is a simpler and easier way to schedule posts, track the performance of your content, and manage all your accounts in one place</p>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
class FrontPageSecondary extends Component {
    render() {
        const tileImgClass = classnames({'tile-img':'true'})

        return (
            <section className="secondary-products-section">
                <div className="container-fluid">
                    <div className="home-secondary">
                        <div className="row">
                            <div className="col-sm-6">
                                <div className="tile">
                                    <div className="row">
                                        <div className={tileImgClass}>
                                            <img className="max-width-img" src={pete} />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="tile-content">
                                            <h3 className="tile-title">New Suit</h3>
                                            <a href="#" className="ta">SHOP NOW</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="tile">
                                    <div className="row">
                                        <div className={tileImgClass} >
                                            <img className="max-width-img" src={brook} />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="tile-content">
                                            <h3 className="tile-title">Scarf</h3>
                                            <a href="#" className="ta">SHOP NOW</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
class FrontPageWideProduct extends Component {
    render() {
        const overlayCol = classnames({'col-md-6':'true','col-xs-10':'true','ver-center-wrapper':'true'})
        return (
            <section className="wide-product-section">
                <div className="container-fluid">
                    <div className="row">
                        <div className='home-wide-product'>
                            <div className="wide-background-img-div">
                                <img className="max-width-img"src={hang} />
                                <div className="overlay">
                                    <div className="row" style={{height: '100%'}}>
                                        <div style={{height: '100%'}} className={overlayCol}>
                                            <div className="overlay-content">
                                                <p className="overlay-title">DRESSED FOR ANYTHING</p>
                                                <div className="rectangle-button-wrapper">
                                                    <div><a href="#">SHOP</a></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        );

    }
}
export default App;
