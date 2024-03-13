// ProductBox.js
import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';
import styles from './index.module.css'; 

const ProductBox = ({ imageSrc, altText, productName, productPrice, linkTo }) => (
  <div className={styles.productBox}>
    <img src={imageSrc} alt={altText} className={styles.productImage} />
    <div className={styles.productInfo}>
      <h3 className={styles.productName}>{productName}</h3>
      <p className={styles.productPrice}>{productPrice}</p>
      <Link to={linkTo}>
        <Button color='orange'>Comprar </Button>
      </Link>
    </div>
  </div>
);

export default ProductBox;