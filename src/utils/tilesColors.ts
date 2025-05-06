export const tileColor = (value: number | null | '') => {
  return value === 2
    ? 'bg-yellow-2'
    : value === 4
    ? 'bg-yellow-4'
    : value === 8
    ? 'bg-yellow-8'
    : value === 16
    ? 'bg-yellow-16'
    : value === 32
    ? 'bg-yellow-32'
    : value === 64
    ? 'bg-yellow-64'
    : value === 128
    ? 'bg-yellow-128'
    : value === 256
    ? 'bg-yellow-256'
    : value === 512
    ? 'bg-yellow-512'
    : value === 1024
    ? 'bg-yellow-1024'
    : value === 2048
    ? 'bg-yellow-2048'
    : 'bg-gray-300'
}
