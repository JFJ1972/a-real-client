import "./App.scss";
import React from "react";
import { CartProvider } from "./context/CartContext";
import Inicio from "./pages/Inicio";
import House from "./pages/House";
import Person from "./pages/Person";
import { BrowserRouter, Routes, Route} from "react-router-dom";


export default function App () {
  /*Anotacion original: Envolvemos la home con el provider del context */
  return (
    <BrowserRouter>
    <CartProvider>
    <Routes>
    <Route path="/" element={<Inicio />} />
    <Route path="/house" element={<House />} />
    <Route path="/person" element={<Person />} />
    </Routes>
    </CartProvider>
    </BrowserRouter>
  );
};


