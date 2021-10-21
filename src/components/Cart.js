import React, { Component } from 'react';

class Cart extends Component {
    render() {
        return (
            
                <div className="cart">
                    {
                        this.props.cart.map(product => (
                                <div className="container-order" key={product._id}>
                                    <img src={product.image} alt={product.title} />
                                    <div className="right-side">
                                        <span className="title">{product.title}</span>
                                        <div className="price">
                                            <span>1 * ${product.price}</span>
                                            <button className="btn primary">Remove</button>
                                        </div>
                                    </div>
                                </div>
                        ))
                    }

                    <div className="total">
                        <div>Total {this.props.stock}</div> 
                        {// to fixed
                        }
                        <button className="btn primary">Proceed</button>
                    </div>
                </div>
            
        );
    }
}

export default Cart;
