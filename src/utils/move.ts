import {type Board} from '../types'

type MoveResult = {
  board: Board
  moved: boolean
}

const mergeRow = (row: (number | null)[]): [number[], boolean] => {
  const filtered = row.filter((n) => n !== null) as number[]
  const merged: number[] = []
  let moved = false

  for (let i = 0; i < filtered.length; i++) {
    if (filtered[i] === filtered[i + 1]) {
      merged.push(filtered[i]! * 2)
      i++
      moved = true
    } else {
      merged.push(filtered[i]!)
    }
  }

  while (merged.length < 4) {
    //@ts-ignore
    merged.push(null)
  }

  if (merged.some((v, i) => v !== row[i])) {
    moved = true
  }

  return [merged, moved]
}

export const moveLeft = (board: Board): MoveResult => {
  let moved = false
  const newBoard = board.map((row) => {
    const [mergedRow, rowMoved] = mergeRow(row)
    if (rowMoved) moved = true
    return mergedRow
  })
  return {board: newBoard, moved}
}

export const moveRight = (board: Board): MoveResult => {
  const reversed = board.map((row) => [...row].reverse())
  const {board: movedBoard, moved} = moveLeft(reversed)
  const restored = movedBoard.map((row) => row.reverse())
  return {board: restored, moved}
}

export const moveUp = (board: Board): MoveResult => {
  const transposed = transpose(board)
  const {board: movedBoard, moved} = moveLeft(transposed)
  const restored = transpose(movedBoard)
  return {board: restored, moved}
}

export const moveDown = (board: Board): MoveResult => {
  const transposed = transpose(board)
  const {board: movedBoard, moved} = moveRight(transposed)
  const restored = transpose(movedBoard)
  return {board: restored, moved}
}

const transpose = (matrix: Board): Board => matrix[0].map((_, i) => matrix.map((row) => row[i]))
;``
