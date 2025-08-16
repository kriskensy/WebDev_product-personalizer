import styles from './Product.module.scss';
import PropTypes, { object, string } from 'prop-types';
import { useState } from 'react';
import ProductImage from '../ProductImage/ProductImage';
import ProductForm from '../ProductForm/ProductForm';

const Product = (props) => {

  const [currentColor, setCurrentColor] = useState(props.colors[0]);
  const [currentSize, setCurrentSize] = useState(props.sizes[0].name);
  const [currentAdditionalPrice, setCurrentAdditionalPrice] = useState(props.sizes[0].additionalPrice);
  const [color] = useState(props.colors);

  const prepareColorClassName = (color) => {
    return styles['color' + color[0].toUpperCase() + color.substr(1).toLowerCase()];
  }  

  const getPrice = () => {
    return props.basePrice + currentAdditionalPrice;
  }

  //TODO tego wyswietlania w konsoli brakuje jeszcze (etap 6 z modułu 15.3)
  const displayCartSummary = (e) => {
    e.preventDefault();
    console.log('Summary');
    console.log('=================');
    console.log('Name: ', props.name);
    console.log('Price: ', getPrice());
    console.log('Size: ', currentSize);
    console.log('Color: ', currentColor);
  }

  return (
    <article className={styles.product}>

      <ProductImage
        title={props.title}
        name={props.name}
        currentColor={currentColor}/>

      <div>
        <header>
          <h2 className={styles.name}>{props.title}</h2>
          <span className={styles.price}>Price: {getPrice()} €</span>
        </header>

        <ProductForm
          sizes={props.sizes}
          colors={props.colors}
          prepareColorClassName={prepareColorClassName}
          currentColor={currentColor}
          currentSize={currentSize}
          setCurrentColor={setCurrentColor}
          setCurrentSize={setCurrentSize}
          setCurrentAdditionalPrice={setCurrentAdditionalPrice}
          displayCartSummary={displayCartSummary}/>

      </div>
    </article>
  )
};

Product.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  basePrice: PropTypes.number.isRequired,
  colors: PropTypes.array.isRequired,
  sizes: PropTypes.array.isRequired
};

export default Product;