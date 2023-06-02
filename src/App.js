import React from "react";
import Home from "./routes/Home";
import About from "./routes/About";
import Login from "./routes/Login";
import Menu from "./routes/Menu";
import Reservations from "./routes/Reservations";
import OrderOnline from "./routes/OrderOnline";
import Confirmation from "./routes/Confirmation";

import {Route, Routes} from "react-router-dom";


function App() {

  return (
    <>
      <Routes>
        <Route path = "/" element = {<Home />}></Route>
        <Route path = "/about" element = {<About />}></Route>
        <Route path = "/login" element = {<Login />}></Route>
        <Route path = "/menu" element = {<Menu />}></Route>
        <Route path = "/order-online" element = {<OrderOnline />}></Route>
        <Route path = "/reservations" element = {<Reservations />}></Route>
        <Route path="/confirmation" element = {<Confirmation />}></Route>
      </Routes>
    </>
  );
}

export default App;