import styles from './Cell.module.scss';

const cell = ({ key, isSnakeCell, isFoodCell, children }) => {
    let cellStyles = styles.cell;

    if(isSnakeCell || isFoodCell) {
        cellStyles = `${cellStyles} ${isSnakeCell ? styles.snakeCell : styles.foodCell}`;
    }

    return (
        <div key={key} className={cellStyles}>{children}</div>
    );
}

export default cell;