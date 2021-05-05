import React, { useState } from 'react';

import styles from './Board.module.scss';
import Cell from './Cell/Cell';
import LinkedList from '../../utils/LinkedList';
import { randomIntFromInterval } from '../../utils/utils';

const BOARD_SIZE = 10;

const createBoard = (size) => {
    const board = [];
    let counter = 1;
    for (let i = 0; i < size; i++){
        const row = [];
        for (let j = 0; j < size; j++){
            row.push(counter++);
        }
        board.push(row);
    }

    return board;
}

const Board = (props) => {
    const [board, setBoard] = useState(createBoard(BOARD_SIZE));
    const [snakeCells, setSnakeCells] = useState(new Set([44]));
    const [snake, setSnake] = useState(new LinkedList(50));
    const [foodCell, setFoodCell] = useState(randomIntFromInterval(1, 100));

    return (
        <div className={styles.board}>
            {board.map((row, rowIndex) => (
                <div key={rowIndex} className={styles.row}>{
                    row.map((value, cellIndex) => (
                        <Cell 
                        key={cellIndex} 
                        isSnakeCell={snakeCells.has(value)}
                        isFoodCell={value === foodCell} />
                    ))
                }</div>
            ))}
        </div>
    );
}

export default Board;