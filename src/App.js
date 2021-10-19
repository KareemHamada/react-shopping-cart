// feature 1
import React from 'react';
import data from './data.json'
import Products from './components/Products'
class App extends React.Component {
  constructor(){
    super();
    this.state = {
      products: data.products,
      size: "",
      sort: "" 
    }
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
              <Products products={this.state.products} />
            </div>
            <div className="sidebar">cart items</div>
          </main>
          <footer>Copyright &copy; by Kareem Hamada</footer>
        </div>
      </div>
    );
  }
}

export default App;
