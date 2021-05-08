import React, { useState, useEffect } from 'react';

import styles from './Board.module.scss';
import Cell from './Cell/Cell';
import { LinkedList , Node } from '../../utils/LinkedList';
import { randomIntFromInterval } from '../../utils/utils';

const BOARD_SIZE = 10;

const directions = {
    UP: 'UP',
    DOWN: 'DOWN',
    LEFT: 'LEFT',
    RIGHT: 'RIGHT'
}

const getDirectionOnKeyPress = key => {
    if (key === 'ArrowUp') return directions.UP;
    if (key === 'ArrowDown') return directions.DOWN;
    if (key === 'ArrowLeft') return directions.LEFT;
    if (key === 'ArrowRight') return directions.RIGHT;
    return undefined;
}

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
    const [snake, setSnake] = useState(new LinkedList(new Node(44)));
    const [foodCell, setFoodCell] = useState(randomIntFromInterval(1, 100));
    const [direction, setDirection] = useState(directions.UP);

    useEffect(() => {
        setTimeout(() => {
            moveSnake();
        }, 1000);

        // return () => clearTimeout(timer);
    }, [snakeCells, direction]);

    const moveSnake = () => {
        switch(direction) {
            case directions.UP:
                snake.head.value -= 10;
                break;
            case directions.DOWN:
                snake.head.value += 10;
                break;
            case directions.LEFT:
                snake.head.value--;
                break;
            case directions.RIGHT: 
            snake.head.value++;
                break;
            default: snake.head.value++;
        }

        let node = snake.head.current;
        snake.append(snake.head.value);
        snake.remove();
        console.log(snake);
        const newSnakeCells = new Set();

        while(node) {
            newSnakeCells.add(node.value);
            node = node.next;
        }
        console.log(newSnakeCells);
        setSnakeCells(newSnakeCells);
    }

    return (
        <div className={styles.board}>
            {board.map((row, rowIndex) => (
                <div key={rowIndex} className={styles.row}>{
                    row.map((value, cellIndex) => (
                        <Cell 
                        key={cellIndex} 
                        isSnakeCell={snakeCells.has(value)}
                        isFoodCell={value === foodCell}>{value}</Cell>
                    ))
                }</div>
            ))}
        </div>
    );
}

export default Board;