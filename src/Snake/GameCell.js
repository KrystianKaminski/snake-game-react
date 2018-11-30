import React from 'react'


const style = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
}

const GameCell = (props) => (
    <div
        style={{
            ...style,
            flexBasis: 100 / props.numbersOfCells + '%'
        }}
    >
        {props.cell}
    </div>
)

export default GameCell