import React, { useState } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Cources from './Components/Cources/Cources';
import fakeData from './fakeData/fakeData';
import Cart from './Components/Cart/Cart';



function App() {
  
  const [cart, setCart] = useState([])

  const handelAddCart = (course) => {
    const newCart = [...cart, course];
    setCart(newCart);
  }

  return (
    <div className="App">
      {/* nav section  */}
      <Header></Header>
      {/* cart section */}
      <Cart cart={cart}></Cart>

      {/* cources section */}

      {
        fakeData.map((course) =><Cources course={course} handelAddCart={handelAddCart}></Cources>)
      }
    </div>
  );
}

export default App;
