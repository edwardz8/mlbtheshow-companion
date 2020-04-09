export default {
  matchTeamLogo(team) {
    switch (team) {
      case "ATL":
        return "bbclub-ATL ATL";
        break;
      case "HOU":
        return "bbclub-HOU";
        break;
      case "BOS":
        return "bbclub-BOS BOS";
        break;
      case "CLE":
        return "bbclub-CLE CLE";
        break;
      case "MIL":
        return "bbclub-MIL MIL";
        break;
      case "NYY":
        return "bbclub-NYY NYY";
        break;
      case "TB":
        return "bbclub-TB TB";
        break;
      case "BAL":
        return "bbclub-BAL BAL";
        break;
      case "TOR":
        return "bbclub-TOR TOR";
        break;
      case "DET":
        return "bbclub-DET DET";
        break;
      case "KC":
        return "bbclub-KC KC";
        break;
      case "MIN":
        return "bbclub-MIN MIN";
        break;
      case "CWS":
        return "bbclub-CWS CWS";
        break;
      case "OAK":
        return "bbclub-OAK OAK";
        break;
      case "TEX":
        return "bbclub-TEX TEX";
        break;
      case "LAA":
        return "bbclub-LAA LAA";
        break;
      case "SEA":
        return "bbclub-SEA SEA";
        break;
      case "WSH":
        return "bbclub-WSH WSH";
        break;
      case "PHI":
        return "bbclub-PHI PHI";
        break;
      case "NYM":
        return "bbclub-NYM NYM";
        break;
      case "MIA":
        return "bbclub-MIA MIA";
        break;
      case "PIT":
        return "bbclub-PIT PIT";
        break;
      case "STL":
        return "bbclub-STL STL";
        break;
      case "CIN":
        return "bbclub-CIN CIN";
        break;
      case "CHC":
        return "bbclub-CHC CHC";
        break;
      case "LAD":
        return "bbclub-LAD LAD";
        break;
      case "ARI":
        return "bbclub-ARI ARI";
        break;
      case "COL":
        return "bbclub-COL COL";
        break;
      case "SF":
        return "bbclub-SF SF";
        break;
      case "SD":
        return "bbclub-SD SD";
        break;
      default:
        return "bbclub-mlb";
    }
  },

  playerPosition(positions) {
    switch (positions) {
      case 'SP':
        return 'pitcher';
        break;
      case 'RP':
        return 'pitcher';
        break;
      case 'P':
        return 'pitcher';
        break;
      case 'C':
        return 'catcher';
        break;
      case '1B':
        return 'firstBaseman';
        break;
      case '2B':
        return 'secondBaseman';
        break;
      case '3B':
        return 'thirdBaseman';
        break;
      case 'SS':
        return 'shortstop';
        break;
      case 'IF':
        return 'infielder';
        break;
      case 'LF':
        return 'outfielder';
        break;
      case 'CF':
        return 'outfielder';
        break;
      case 'RF':
        return 'outfielder';
        break;
    }
  }

}
