import React from 'react'
import {type Board as BoardType} from '../types'
import Tile from './tile'

type Props = {
  board: BoardType
}

export const Board: React.FC<Props> = ({board}) => {
  return (
    <>
      <div className=' grid grid-cols-4 gap-2 p-4 bg-gray-100 border border-gray-500 rounded'>
        {board.flat().map((tile, index) => (
          <Tile
            key={index}
            value={tile}
          />
        ))}
      </div>
    </>
  )
}
