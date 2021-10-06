import './App.css';
import { useState } from "react"
import Contador from "./Contador"
export default function App() { 
 return(
  <div>
    <Contador name="Fulano" />
    <Contador name="Ciclano"/>
    <Contador name="Beltrano"/>
  </div>
 );
}

