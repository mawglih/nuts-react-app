import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  getTokenStart,
  getProductsStart
} from 'actions';
import styles from './home.css'

class Home extends Component {

  componentDidMount() {
    const {
      getTokenStart,
    } = this.props;
    getTokenStart();
  }

  render() {
    return (
      <div className={styles.container}>
        <button
          type="button"
          className={styles.button}
        >
          <Link to="/products">
            Products
          </Link>
        </button>
      </div>
    );
  }
}

export default connect(null, { getTokenStart, getProductsStart })(Home);
