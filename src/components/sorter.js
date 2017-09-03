import React, { Component } from 'react';
import classnames from 'classnames';

class Sorter extends Component {
    render() {
        const OneSorter = classnames({'col-md-1':'true','col-sm-5':'true'})
        return(
            <section className="sorter-section">
                <div className="sorter-wrapper">
                    <div className="container-fluid">
                        <div className="row">
                            <div className={OneSorter}>
                                <p>FILTER</p>
                            </div>
                            <div className={OneSorter}>
                                <p>SORT BY</p>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        );
    }
}

export default Sorter;