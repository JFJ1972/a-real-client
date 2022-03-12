import React, { useContext } from "react";
import CartContext from "../../context/CartContext";
import styles from "./styles.module.scss";
import { ProductsData } from "../../data/Data2";
import img4 from "../../assets/Familia.jpg"

const Persons= () => {
  const { AddItemToCart } = useContext(CartContext);
  return (

    <div className={styles.productsContain}>
      <div className={styles.img54}>
      <h2><img className={styles.img4}src={img4} alt=""/>      
      Cuidado Personal</h2>  
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

export default Persons;