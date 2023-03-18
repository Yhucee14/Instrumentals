import './App.css';
import Home from './Components/Home';
import Cart from './Components/Pages/Cart';
import React from "react";


const App = () => {


  return (
    <div id='container'>
      <Home />
       {/* <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Cart" element={<Cart />} />
      </Routes> 
      </BrowserRouter> */}
    </div>
     
  );
};

export default App;
