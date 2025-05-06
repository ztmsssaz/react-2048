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
      className={`tile border w-[80px] h-[80px] md:w-[100px] md:h-[100px] flex items-center justify-center text-xl 
        font-bold rounded bg-gray-200  ${tileColor(value)} ${
        value != prevValue && value && 'animate__animated animate__bounceIn'
      }`}
    >
      {value ?? ''}
    </div>
  )
}

export default Tile
