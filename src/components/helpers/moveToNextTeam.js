export const moveToNextTeam = (teamsData, activeTeam, setActiveTeam) => {
  if (teamsData.length > activeTeam + 1) {
    setActiveTeam(activeTeam + 1);
  } else {
    setActiveTeam(0);
  }
};
