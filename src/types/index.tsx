// types.ts
export type Tile = number | null
export type Board = Tile[][]
export type TileMeta = {
  id: number
  position: [number, number]
  value: number
  mergeWidth?: number
}
