import React from 'react';
import { MainContentOrder } from './components/MainContentOrder';
import { RightContentOrder } from './components/RightContentOrder';
import { dishs } from './Menu';
import { Footer } from './Footer';

export class OrderOnline extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0,
      letter: "",
      dishItems: dishs,
      cart: [],
      subtotal: 0
    }
    this.handleClickAddItems = this.handleClickAddItems.bind(this);
  }

  handleClickAddItems(item) {
    let count = this.state.number + 1;
    this.setState({number: count}); 

    let addLetterS = "s";
    if (this.state.letter === "" && this.state.number >= 1) {
      this.setState({letter: addLetterS})
    }

    let found = false;

    let updatedCart = this.state.cart.map((cartItem) => {
      if (cartItem.name === item.name) {
        found = true;
        cartItem.quantity++;
        
        return cartItem;
      } else {
        return cartItem;
      }  
    });

    if (!found) {
      updatedCart.push({id: item.id, name: item.name, price: item.price, quantity: 1})
    }
    this.setState({cart: updatedCart})
    
    let subtotalItems = this.state.subtotal;
    subtotalItems =  this.state.subtotal + item.price;
      this.setState({subtotal: subtotalItems})
    console.log(subtotalItems);
    console.log(updatedCart);
    
  }
  
  render() {

    // const listDishs = dishs.map((dish, name) => 
    //                   <div className="container"
    //                         style={{borderBottom: "1px dotted #eee",
    //                                 marginBottom: 20}}
    //                                 key={dish.id}
    //                                 name={dish.name}
    //                                 onClick={this.handleClickAddItems}>
    //                     <div className="name-price-items btn btn-dark">
    //                       <p style={{color: "#bd884d",
    //                                 fontSize: 18}}>{dish.name}</p>
    //                       <p style={{color: "#bd884d",
    //                                 fontSize: 18}}>{dish.price}</p> 
    //                     </div>
    //                 </div>),
    //  const  listBurgers = burgers.map((burger) => 
    //                     <div className="container"
    //                           style={{borderBottom: "1px dotted #eee",
    //                                   marginBottom: 20}}
    //                                   key={burger.id}
    //                                   onClick={this.handleClickAddItems}>
    //                       <div className="name-price-items btn btn-dark">
    //                         <p style={{color: "#bd884d",
    //                                   fontSize: 18}}>{burger.name}</p>
    //                         <p style={{color: "#bd884d",
    //                                   fontSize: 18}}>{burger.price}</p> 
    //                       </div>
    //                   </div>),
    //     listDesserts = desserts.map((dessert) => 
    //                   <div className="container"
    //                         style={{borderBottom: "1px dotted #eee",
    //                                 marginBottom: 20}}
    //                                 key={dessert.id}
    //                                 onClick={this.handleClickAddItems}>
    //                     <div className="name-price-items btn btn-dark">
    //                       <p style={{color: "#bd884d",
    //                                 fontSize: 18}}>{dessert.name}</p>
    //                       <p style={{color: "#bd884d",
    //                                 fontSize: 18}}>{dessert.price}</p> 
    //                     </div>
    //                 </div>),
    //   listDrinks = drinks.map((drink) => 
    //               <div className="container"
    //                     style={{borderBottom: "1px dotted #eee",
    //                             marginBottom: 20}}
    //                             key={drink.id}>
    //                 <div className="name-price-items">
    //                   <p style={{color: "#bd884d",
    //                             fontSize: 18}}>{drink.name}</p>
    //                   <p style={{color: "#bd884d",
    //                             fontSize: 18}}>{drink.price}</p> 
    //                 </div>
    //                 <p>{drink.description}</p>
    //                 <button className="btn btn-light"
    //                         style={{marginBottom: 20}}>Ajouter au panier</button>
    //             </div>);

    return (
      <div>
        <div id="content-order">
          <div>
            <div className="main-content-order">
              <div className="menu-order">
                <h2>Menu à la carte</h2>
                <p>Sin autem ad adulescentiam perduxissent, dirimi tamen interdum contentione vel uxoriae condicionis vel commodi alicuius, quod idem adipisci uterque non posset.</p>
                <div className="bar-horizontal"></div>
              </div>
              <h3>Plats</h3>
              {this.state.dishItems.map((dish) => {
                return <MainContentOrder key={dish.id} details={dish} handleClickAddItems={this.handleClickAddItems}/>
              })}
              {/* <MainContentOrder listDish={listDishs}
                                  listBurger={listBurgers}
                                  listDessert={listDesserts}
                                  listDrink={listDrinks}/> */}
            </div>
            <div>

            </div>
            <div>

            </div>
            <div>

            </div>
          </div>
          <div className="right-content-order">
            <RightContentOrder  number={this.state.number}
                                letter={this.state.letter}
                                cart={this.state.cart}
                                key={dishs.id}
                                subtotal={this.state.subtotal}/>
        </div>
        </div>
        <Footer />
      </div>
    );
  }
}
