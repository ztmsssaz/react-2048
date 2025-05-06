import React, {useEffect, useState} from 'react'
import {useGame} from './hooks/useGame'
import {Board} from './components/board'
import './App.css'
import 'animate.css'

function App() {
  const {board, score, bestScore, move, resetGame, gameOver} = useGame()
  const [touchStart, setTouchStart] = useState<{x: number; y: number} | null>(null)

  const handleTouchStart = (e: React.TouchEvent) => {
    const touch = e.touches[0]
    setTouchStart({x: touch.clientX, y: touch.clientY})
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!touchStart) return

    const touch = e.changedTouches[0]
    const dx = touch.clientX - touchStart.x
    const dy = touch.clientY - touchStart.y

    if (Math.abs(dx) > Math.abs(dy)) {
      if (dx > 0) move('right')
      else move('left')
    } else {
      if (dy > 0) move('down')
      else move('up')
    }

    setTouchStart(null) // پس از اتمام حرکت، مقدار شروع را ریست می‌کنیم
  }

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const directionMap: {[key: string]: 'up' | 'down' | 'left' | 'right'} = {
        ArrowUp: 'up',
        ArrowDown: 'down',
        ArrowLeft: 'left',
        ArrowRight: 'right',
      }

      const dir = directionMap[e.key]
      if (dir) move(dir)
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [move])

  return (
    <div
      className='min-h-screen flex flex-col items-center justify-center bg-slate-50'
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <h1 className='text-3xl font-bold mb-4'>2048</h1>
      <div className='flex justify-around text-xl mb-4 w-full'>
        <div className='mr-2 font-bold text-2xl'>Score: {score}</div>
        <div className='ml-2'>Best Score: {bestScore}</div>
      </div>
      {gameOver && <div className='text-2xl text-red-500 mb-4'>Game Over! Try Again.</div>}
      <Board board={board} />
      <button
        className='mt-4 px-4 py-2 bg-blue-500 text-white rounded'
        onClick={resetGame}
      >
        Restart Game
      </button>
    </div>
  )
}

export default App
