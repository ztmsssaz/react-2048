// src/components/Board.tsx
import React from 'react'
import {Board as BoardType} from '../types'
import {Tile} from './Tile'

type Props = {
  board: BoardType
}

export const Board: React.FC<Props> = ({board}) => {
  return (
    <div className='grid grid-cols-4 gap-2 p-4 bg-gray-100 rounded'>
      {board.flat().map((tile, index) => (
        <Tile
          key={index}
          value={tile}
        />
      ))}
    </div>
  )
}
