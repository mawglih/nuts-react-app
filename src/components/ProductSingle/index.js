import React from 'react';
import styles from './single.css';

const ProductSingle = ({
  name,
  image
}) => {
  return (
    <div className={styles.container}>
      <h4 className={styles.name}>{name}</h4>
      <img className={styles.image} src={image} alt={name}/>
    </div>
  )
}

export default ProductSingle;
