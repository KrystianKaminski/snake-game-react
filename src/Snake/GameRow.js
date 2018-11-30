import React from 'react'
import GameCell from './GameCell';

const style = {
    display: 'flex'
}

const GameRow = (props) => {
    const numbersOfCells = props.row.length
    return (
        <div
            style={{
                ...style,
                height: 100 / numbersOfCells + '%'
            }}
        >
            {
                props.row.map(cell => (
                    <GameCell
                        cell={cell}
                        numbersOfCells={props.row.length}
                    />
                ))
            }
        </div>
    )
}

export default GameRow