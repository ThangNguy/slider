const PATH = "https://a109b1b9.ngrok.io/api/v3";

export const getTournament = partnerID => `${PATH}/partners/${partnerID}/tournaments`;

export const getURLDivision = tournamentID => `${PATH}/tournaments/${tournamentID}/divisions`;
export const getURLTeams = tournamentID => `${PATH}/tournaments/${tournamentID}/teams`;