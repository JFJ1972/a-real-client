import React, { useContext } from "react";
import CartContext from "../../context/CartContext";
import styles from "./styles.module.scss";
import { ProductsData } from "../../data/Data";
import img2 from "../../assets/Hogar.jpg"

const Products = () => {
  /* Traemos del context la funcion para agregar un producto */
  const { AddItemToCart } = useContext(CartContext);
  return (
    <div className={styles.productsContainer}>
     <div className= {styles.img52} >
     <h2><img className={styles.img2}src={img2} alt=""/>      
      Aseo Hogar</h2>  
      </div>
     
      {ProductsData.map((product, i) => (
        <div key={i} className={styles.product}>
          <img src={product.img} alt={product.name} />
          <div>
            <p>
              {product.name}  ${product.price}
            </p>
          </div>
          <button onClick={() => AddItemToCart(product)}>Comprar</button>
        </div>
      ))}
    </div>
    
  );
};

export default Products;
