import styles from './ProductForm.module.scss';
import Button from '../Button/Button';
import PropTypes from 'prop-types';
import OptionSize from '../OptionSize/OptionSize';
import OptionColor from '../OptionColor/OptionColor';

const ProductForm = (props) => {
  return (
    <form>

      <OptionSize
        sizes={props.sizes}
        currentSize={props.currentSize}
        setCurrentSize={props.setCurrentSize}
        setCurrentAdditionalPrice={props.setCurrentAdditionalPrice}/>

      <OptionColor
        colors={props.colors}
        currentColor={props.currentColor}
        prepareColorClassName={props.prepareColorClassName}
        setCurrentColor={props.setCurrentColor}/>

      <Button 
        type='button'
        onClick={props.displayCartSummary}
        className={styles.button}>
        <span className="fa fa-shopping-cart" />
      </Button>
    </form>
  )
}

ProductForm.propTypes = {
  colors: PropTypes.array.isRequired,
  sizes: PropTypes.array.isRequired,
  currentSize: PropTypes.string.isRequired,
  currentColor: PropTypes.string.isRequired,
  setCurrentSize: PropTypes.func.isRequired,
  setCurrentColor: PropTypes.func.isRequired,
  setCurrentAdditionalPrice: PropTypes.func.isRequired,
  displayCartSummary: PropTypes.func.isRequired
}

export default ProductForm;