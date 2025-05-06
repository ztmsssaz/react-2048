// src/App.tsx
import React, {useEffect} from 'react'
import {useGame} from './hooks/useGame'
import {Board} from './components/Board'

function App() {
  const {board, move} = useGame()

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
    <div className='min-h-screen flex items-center justify-center bg-slate-50'>
      <Board board={board} />
    </div>
  )
}

export default App
