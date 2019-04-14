import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  getProductsStart
} from 'actions';
import ProductSingle from '../ProductSingle';
import styles from './products.css';

class Products extends Component {

  componentDidMount() {
    const {
      getProductsStart,
    } = this.props;
    getProductsStart();
  }

  render() {
    const {
      products,
    } = this.props;
    console.log('products: ', products);
    return (
      <div className={styles.container}>
        <h1>Products</h1>
        <div className={styles.content}>
          {products ? (
            products.map(item => (
              <ProductSingle
                key={item.id}
                name={item.masterData.current.name.en}
                image={item.masterData.current.masterVariant.images[0].url}
              />
            ))
          ) : (
            <h2>Loading...</h2>
          )}
        </div>
   
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  products: state.products.products,
});

export default connect(mapStateToProps, { getProductsStart })(Products);
