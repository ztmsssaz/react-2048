import {type Board, type Tile} from '../types'

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

export const calculateScore = (board: Board): number => {
  return board.flat().reduce((score: any, cell) => {
    return cell ? score + (cell || 0) : score
  }, 0)
}

// src/utils/initializeBoard.ts
export const initializeBoard = (): number[][] => {
  // برد ۴x۴ با مقدار اولیه صفر
  const board = Array(4)
    .fill(null)
    .map(() => Array(4).fill(0))

  // قرار دادن دو عدد ۲ در مکان‌های تصادفی
  for (let i = 0; i < 2; i++) {
    const emptyCells = getEmptyCells(board)
    const randomIndex = Math.floor(Math.random() * emptyCells.length)
    const [x, y] = emptyCells[randomIndex]
    board[x][y] = 2
  }

  return board
}

const getEmptyCells = (board: number[][]): [number, number][] => {
  const emptyCells: [number, number][] = []
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      if (board[i][j] === 0) {
        emptyCells.push([i, j])
      }
    }
  }
  return emptyCells
}
