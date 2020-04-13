// Sort event by minutes/time
export const eventsSort = (events, type) => {
  if (type === 'asc') {
    return events.sort((a, b) => (a.minutes > b.minutes ? 1 : -1))
  }
  return events.sort((a, b) => (a.minutes < b.minutes ? 1 : -1))
}
