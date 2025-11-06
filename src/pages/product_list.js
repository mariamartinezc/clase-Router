import React from "react";
import Axios from 'axios';
import { useState, useEffect } from "react";
import NavBarPrincipal from './components/navbar';

function ListaProducto(){
    const [products, setProducts]= useState([]);
    useEffect(
        () => {
            Axios.get('http://localhost:3001/api/productos')
            .then((response) => (setProducts(response.data)))
            .catch((error) => console.log(error));
        }
    );
    
    return(
        <div>
            <NavBarPrincipal/>
            <h2>odisuoaids</h2>
            <ul>
                {
                    products.map((products) => {
                        return <li>{products.nombre}</li>
                    })
                }
            </ul>
        </div>
    );

}
export default ListaProducto;