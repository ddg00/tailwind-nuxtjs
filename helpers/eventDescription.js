export const eventDescription = (event) => {
  const desc = {
    minutes: '',
    event: '',
    club_id: '',
    message: ''
  }
  for (const key in event) {
    desc.club_id = event[key].club_id
    switch (key) {
      case 'MS':
        desc.event = 'Match Start'
        desc.message = `Match Start`
        break
      case 'HT':
        desc.event = 'Half Time'
        desc.message = 'Half Time'
        break
      case 'ME':
        desc.event = 'Match End'
        desc.message = 'Match End'
        break
      case 'PS':
        desc.event = 'Penalty Scored'
        desc.message = `Penalty scored by ${event[key].player_name} (${event[key].club_name}). `
        desc.club_id = event[key].club_id
        break
      case 'PM':
        desc.event = 'Penalty Missed'
        desc.message = `Penalty missed by ${event[key].player_name} (${event[key].club_name}). `
        break
      case 'OG':
        desc.event = 'Own Goal'
        desc.message =
          `Own Goal by ${event[key].player_name} (${event[key].club_name}). ` +
          desc.message
        desc.club_id = event[key].club_id
        break
      case 'GOAL':
        desc.event = 'Goal'
        desc.message =
          `Goal by ${event[key].player_name} (${event[key].club_name}). ` +
          desc.message
        desc.club_id = event[key].club_id
        break
      case 'AST':
        desc.event = 'Goal'
        desc.message = desc.message + `Assited by ${event[key].player_name} `
        break
      case 'KK':
        desc.event = 'Yellow Card'
        desc.message = `${event[key].player_name} (${event[key].club_name}) is shown yellow card`
        break
      case 'YC':
        desc.event = 'Yellow Card'
        desc.message = `${event[key].player_name} (${event[key].club_name}) is shown yellow card`
        break
      case 'SY':
        desc.event = 'Yellow Card'
        desc.message = `${event[key].player_name} (${event[key].club_name}) is shown yellow card`
        break
      case 'RED':
        desc.event = 'Red Card'
        desc.message = `${event[key].player_name} (${event[key].club_name}) is shown Red card`
        break
      case 'KM':
        desc.event = 'Red Card'
        desc.message = `${event[key].player_name} (${event[key].club_name}) is shown Red card`
        break
      case 'SUB_IN':
        desc.event = 'Substitution'
        desc.message =
          `Substitution, ${event[key].player_name} replaces ` + desc.message
        break
      case 'SUB_OUT':
        desc.event = 'Substitution'
        desc.message = desc.message + `${event[key].player_name}`
        break
      case 'minutes':
        desc.minutes = event[key]
        break
      default:
      // code block
    }
  }
  return desc
}
