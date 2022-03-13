import React, { useContext } from "react";
import CartContext from "../../context/CartContext";
import styles from "./styles.module.scss";
import { ProductsData } from "../../data/Data";
import img2 from "../../assets/Hogar.jpg"

const Products = () => {
  /* Se crea additemtocart que viene desde context para agregar items, 
  se utiliza useContext que recibe lo importado desde Cartcontext*/
  const { AddItemToCart } = useContext(CartContext);
  return (
    <div className={styles.productsContainer}>
     <div className= {styles.img52} >
     <h2><img className={styles.img2}src={img2} alt=""/>      
      Aseo Hogar</h2>  
      </div>
      {ProductsData.map((product, i) => (
        /* se trae la info desde data para las card y se mapea el indice i para que 
        product sea cada uno (con .img .name .price) luego se crea el boton que se activa con onclick */
        <div key={i} className={styles.product}>
          <img src={product.img} alt={product.name} />
          <div>
            <p>
              {product.name}  ${product.price}
            </p>
          </div>
          <button onClick={() => /*mediante 
          este boton se registra el evento*/ AddItemToCart(product)}>Comprar</button>
        </div>
      ))}
    </div>
    
  );
};

export default Products;
