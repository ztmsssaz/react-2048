import React from 'react'
import {usePrevProps} from '../hooks/usePrev'
import {tileColor} from '../utils/tilesColors'

type Props = {
  value: number | null
}

const Tile: React.FC<Props> = ({value}) => {
  const prevValue = usePrevProps(value)
  return (
    <div
      className={`tile w-20 h-20 flex items-center justify-center text-xl 
        font-bold rounded bg-gray-200  ${tileColor(value)} ${
        value != prevValue && value && 'animate__animated animate__bounceIn'
      }`}
    >
      {value ?? ''}
    </div>
  )
}

export default Tile
