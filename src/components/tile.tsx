// src/components/Tile.tsx
import React from 'react'

type Props = {
  value: number | null
}

export const Tile: React.FC<Props> = ({value}) => {
  return (
    <div
      className={`w-20 h-20 flex items-center justify-center text-xl font-bold rounded bg-gray-200 ${
        value ? 'bg-yellow-400' : 'bg-gray-300'
      }`}
    >
      {value ?? ''}
    </div>
  )
}
