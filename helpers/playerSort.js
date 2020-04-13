// Sort Player by Psition then sort by startering/field and bench
export const playerSort = (players) => {
  const PG = players.filter((p) => p.primary_position === 'PG')
  const BK = players.filter((p) => p.primary_position === 'BK')
  const TG = players.filter((p) => p.primary_position === 'TG')
  const DP = players.filter((p) => p.primary_position === 'DP')
  players = [...PG, ...BK, ...TG, ...DP]
  const field = players.filter((p) => p.field)
  const bench = players.filter((p) => !p.field)
  return [...field, ...bench]
}
