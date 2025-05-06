import {useState, useEffect} from 'react'
import {type Board} from '../types'
import {getEmptyBoard, addRandomTile, calculateScore} from '../utils/helpers'
import {moveLeft, moveRight, moveUp, moveDown} from '../utils/move'

export const useGame = () => {
  const [board, setBoard] = useState<Board>(getEmptyBoard())
  const [score, setScore] = useState<number>(0)
  const localScore = parseInt(localStorage.getItem('score') ?? '0')
  const [bestScore, setBestScore] = useState<number>(localScore ?? 0)
  const [gameOver, setGameOver] = useState<boolean>(false)

  useEffect(() => {
    const withInitialTiles = addRandomTile(addRandomTile(board))
    setBoard(withInitialTiles)
  }, [])

  const resetGame = () => {
    const initialBoard = getEmptyBoard()
    const withInitialTiles = addRandomTile(addRandomTile(initialBoard))
    setBoard(withInitialTiles)
    setScore(0)
    setGameOver(false)
  }

  const move = (direction: 'up' | 'down' | 'left' | 'right') => {
    let result
    if (direction === 'left') result = moveLeft(board)
    else if (direction === 'right') result = moveRight(board)
    else if (direction === 'up') result = moveUp(board)
    else result = moveDown(board)

    if (result.moved) {
      const withNewTile = addRandomTile(result.board)
      setBoard(withNewTile)
      setScore(calculateScore(withNewTile))
      localStorage.setItem('score', calculateScore(withNewTile).toString())
      if (score > bestScore) {
        setBestScore(score)
      }
      if (!canMove(withNewTile)) {
        setGameOver(true)
      }
    }
  }

  const canMove = (board: Board): boolean => {
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 3; j++) {
        if (board[i][j] === null || board[i][j] === board[i][j + 1]) return true
        if (board[j][i] === null || board[j][i] === board[j + 1][i]) return true
      }
    }
    return false
  }

  return {board, score, bestScore, move, resetGame, gameOver}
}
