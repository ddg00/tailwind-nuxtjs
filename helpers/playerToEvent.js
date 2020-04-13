export const playerToEvent = (player, clubName) => {
  return {
    club_name: clubName,
    club_id: player.club_id,
    player_name: player.full_name,
    jersey_no: player.jersey_no
  }
}
