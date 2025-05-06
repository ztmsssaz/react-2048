// src/utils/helpers.ts
import {Board} from '../types'

export const getEmptyBoard = (): Board => {
  return Array(4)
    .fill(null)
    .map(() => Array(4).fill(null))
}

export const getRandomEmptyCell = (board: Board): [number, number] | null => {
  const emptyCells: [number, number][] = []

  board.forEach((row, i) => {
    row.forEach((cell, j) => {
      if (cell === null) emptyCells.push([i, j])
    })
  })

  if (emptyCells.length === 0) return null

  return emptyCells[Math.floor(Math.random() * emptyCells.length)]
}

export const addRandomTile = (board: Board): Board => {
  const newBoard = board.map((row) => [...row])
  const cell = getRandomEmptyCell(newBoard)
  if (!cell) return newBoard

  const [i, j] = cell
  newBoard[i][j] = Math.random() < 0.9 ? 2 : 4

  return newBoard
}
