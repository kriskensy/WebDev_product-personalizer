import styles from './OptionColor.module.scss';
import clsx from 'clsx';
import PropTypes from 'prop-types';

const OptionColor = (props) => {
  return (
    <div className={styles.colors}>
      <h3 className={styles.optionLabel}>Colors</h3>
      <ul className={styles.choices}>
        {props.colors.map(item => (
          <li key={item} >
            <button type='button' 
              onClick={(e) => props.setCurrentColor(item)} 
              className={clsx(props.prepareColorClassName(item), item === props.currentColor && styles.active)}></button>
          </li>))}
      </ul>
    </div>
  )
}

OptionColor.propTypes = {
  colors: PropTypes.array.isRequired,
  currentColor: PropTypes.string.isRequired,
  prepareColorClassName: PropTypes.func.isRequired,
  setCurrentColor: PropTypes.func.isRequired
}

export default OptionColor;