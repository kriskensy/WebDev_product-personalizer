import styles from './Product.module.scss';
import clsx from 'clsx';
import Button from '../Button/Button';
import PropTypes, { object, string } from 'prop-types';
import { useState } from 'react';
import productsData from '../../data/products';

const Product = props => {

  const [buttonsSizes] = useState(productsData[0].sizes);
  const [buttonsColors] = useState(productsData[0].colors);

  const [currentName, setCurrentName] = useState(productsData[0].name);
  const [currentColor, setCurrentColor] = useState(productsData[0].colors[0]);
  const [currentSize, setCurrentSize] = useState(productsData[0].sizes[0].name);

  const prepareColorClassName = color => {
    return styles['color' + color[0].toUpperCase() + color.substr(1).toLowerCase()];
  }

//TODO wywalic console.logi

  return (
    <article className={styles.product}>
      <div className={styles.imageContainer}>
        <img 
          className={styles.image}
          alt={productsData.title}
          src={`${process.env.PUBLIC_URL}/images/products/shirt-` + currentName + `--` + currentColor + `.jpg`} />

          {console.log('name: ', currentName)};
          {console.log('color: ', currentColor)};
      </div>
      <div>
        <header>
          <h2 className={styles.name}>{props.title}</h2>
          <span className={styles.price}>{props.basePrice} €</span>
        </header>
        <form>
          <div className={styles.sizes}>
            <h3 className={styles.optionLabel}>Sizes</h3>
            <ul className={styles.choices}>
              {/* <li><Button>S</Button></li>
              <li><Button>M</Button></li>
              <li><Button>L</Button></li>
              <li><Button className={styles.active}>XL</Button></li> */}

              {buttonsSizes.map(size => <li><Button key={size.name} onClick={() => setCurrentSize(size.name)} className={clsx(size.name === currentSize && styles.active)}>{size.name}</Button></li>)}
            </ul>
          </div>
          <div className={styles.colors}>
            <h3 className={styles.optionLabel}>Colors</h3>
            <ul className={styles.choices}>
              {/* <li><button type="button" className={clsx(styles.colorBlack, styles.active)} /></li>
              <li><button type="button" className={clsx(styles.colorRed)} /></li>
              <li><button type="button" className={clsx(styles.colorWhite)} /></li> */}

              {buttonsColors.map(color => <li><Button key={color} onClick={() => setCurrentColor(color)} className={clsx(prepareColorClassName(color), color === currentColor && styles.active)}></Button></li>)}
            </ul>
          </div>
          <Button className={styles.button}>
            <span className="fa fa-shopping-cart" />
          </Button>
        </form>
      </div>
    </article>
  )
};

Product.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  title: PropTypes.string,
  basePrice: PropTypes.number,
  colors: PropTypes.arrayOf(string),
  sizes: PropTypes.arrayOf(object)
};

export default Product;