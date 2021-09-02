import * as NBAIcon from "react-nba-logos";

const renderIcon = (abbreviation) => {
  switch (abbreviation) {
    case "ATL":
      return <NBAIcon.ATL />;

    case "BKN":
      return <NBAIcon.BKN />;

    case "BOS":
      return <NBAIcon.BOS />;

    case "CHA":
      return <NBAIcon.CHA />;

    case "CHI":
      return <NBAIcon.CHI />;

    case "CLE":
      return <NBAIcon.CLE />;

    case "DAL":
      return <NBAIcon.DAL />;

    case "DEN":
      return <NBAIcon.DEN />;

    case "DET":
      return <NBAIcon.DET />;

    case "GSW":
      return <NBAIcon.GSW />;

    case "HOU":
      return <NBAIcon.HOU />;

    case "IND":
      return <NBAIcon.IND />;

    case "LAC":
      return <NBAIcon.LAC />;

    case "LAL":
      return <NBAIcon.LAL />;

    case "MEM":
      return <NBAIcon.MEM />;

    case "MIA":
      return <NBAIcon.MIA />;

    case "MIL":
      return <NBAIcon.MIL />;

    case "MIN":
      return <NBAIcon.MIN />;

    case "NOP":
      return <NBAIcon.NOP />;

    case "NYK":
      return <NBAIcon.NYK />;

    case "OKC":
      return <NBAIcon.OKC />;
    case "ORL":
      return <NBAIcon.ORL />;

    case "PHI":
      return <NBAIcon.PHI />;

    case "PHX":
      return <NBAIcon.PHX />;

    case "POR":
      return <NBAIcon.POR />;

    case "SAC":
      return <NBAIcon.SAC />;

    case "SAS":
      return <NBAIcon.SAS />;
    case "TOR":
      return <NBAIcon.TOR />;

    case "UTA":
      return <NBAIcon.UTA />;

    case "WAS":
      return <NBAIcon.WAS />;

    default:
      break;
  }
};

export default renderIcon;
