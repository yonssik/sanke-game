import styles from './Cell.module.scss';

const cell = ({ key, isSnakeCell, isFoodCell }) => {
    let cellStyles = styles.cell;

    if(isSnakeCell || isFoodCell) {
        cellStyles = `${cellStyles} ${isSnakeCell ? styles.snakeCell : styles.foodCell}`;
        console.log(cellStyles);
    }

    return (
        <div key={key} className={cellStyles}></div>
    );
}

export default cell;