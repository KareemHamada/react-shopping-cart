// feature 1
import React from 'react';
import data from './data.json'
import Products from './components/Products'
import Cart from './components/Cart'
import Filter from './components/Filter/Filter'

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      products: data.products,
      size: "",
      sort: "" ,
      cart : [],
      cartStock : 0,
    }
  }

  sortFunc = (e) =>{
    const sort = e.target.value
    

    this.setState({
      sort: sort,
      products : this.state.products.slice().sort((a,b) =>
            sort === "Lowest"? a.price > b.price ? 1 : -1
            : sort === "Highest"?
            a.price < b.price ? 1 : -1
            : a._id < b._id ? 1 : -1
      )
    })
  }

  sizeFunc = (e)=>{
    if(e.target.value === ""){
      this.setState({
        size : e.target.value,
        products : data.products,
      })
    }else{
      this.setState({
        size : e.target.value,
        products :  data.products.filter(product => (
                      product.availableSizes.indexOf(e.target.value) >= 0
                  ))
      })
        
    }
  }

  addToCart = (product)=>{
    const cart = this.state.cart
    let stock = this.state.cartStock
    stock += product.price
    cart.push(product)
    this.setState(
      {
        cart : cart,
        cartStock : stock,
      }
    )
  }

  render(){

    return (
      <div>
        <div className="grid-container">
          <header>
            <a href="/">Shopping Cart </a>
          </header>
          <main className="content">
            <div className="main">
              <Filter 
                count={this.state.products.length} 
                size={this.state.size}
                sort={this.state.sort}
                sizeFunc={this.sizeFunc}
                sortFunc={this.sortFunc}
              />
              <hr />
              <Products products={this.state.products} addToCart={this.addToCart} />
            </div>
            <div className="sidebar">
              <h6>You have 2 items in the cart</h6>
              <hr />
              <Cart cart={this.state.cart} stock={this.state.cartStock} />
            </div>
            
          </main>
          <footer>Copyright &copy; by Kareem Hamada</footer>
        </div>
      </div>
    );
  }
}

export default App;
