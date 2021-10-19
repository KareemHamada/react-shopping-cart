import React, { Component } from 'react';

class Products extends Component {
    render() {
        return (
            <ul className="products-container">
                {this.props.products.map(product => (
                    <li key={product._id}>
                        <div className="product-container">
                            {/* */}
                                <img src={product.image} alt={product.title} />
                                <a href={"#" + product._id}> 
                                    <p>{product.title}</p>
                                </a>
                                <div className="last-row">
                                    <span>{product.price}$</span>
                                    <button className="btn primary">Add to Cart </button>
                                </div>
                        </div>
                    </li>
                ))}
            </ul>
        );
    }
}

export default Products;
