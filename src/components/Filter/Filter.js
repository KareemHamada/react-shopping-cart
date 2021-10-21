import React, { Component } from 'react';
import './Filter.css'
class Filter extends Component {
    render() {
        return (
            <div className="filter">
                <div className="count">{this.props.count} product</div>
                <div className="order">
                    Order
                    <select value={this.props.sort} onChange={this.props.sortFunc}>
                        <option value="Latest">Latest</option>
                        <option value="Lowest">Lowest</option>
                        <option value="Highest">Highest</option>
                    </select>
                </div>
                <div className="size">
                    Size
                    <select value={this.props.size} onChange={this.props.sizeFunc}>
                        <option value="">ALL</option>
                        <option value="XS">XS</option>
                        <option value="S">S</option>
                        <option value="M">M</option>
                        <option value="L">L</option>
                        <option value="XL">XL</option>
                        <option value="XLL">XXL</option>
                    </select>
                </div>
            </div>
        );
    }
}

export default Filter;
