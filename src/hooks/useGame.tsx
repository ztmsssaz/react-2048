// src/hooks/useGame.ts
import {useState, useEffect} from 'react'
import {Board} from '../types'
import {getEmptyBoard, addRandomTile} from '../utils/helpers'

export const useGame = () => {
  const [board, setBoard] = useState<Board>(getEmptyBoard())

  useEffect(() => {
    const withInitialTiles = addRandomTile(addRandomTile(board))
    setBoard(withInitialTiles)
  }, [])

  const move = (direction: 'up' | 'down' | 'left' | 'right') => {
    // TODO: حرکت و ادغام کاشی‌ها
    console.log('Moving', direction)
  }

  return {board, move}
}
