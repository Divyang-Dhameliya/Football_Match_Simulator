import { Team } from "./Team.js";
import { Match } from "./Match.js";
import { ScoreBoard } from "./ScoreBoard.js";
import { MatchStatistics } from "./MatchStatistics.js";
import { HindiCommentary } from "./HindiCommentary.js";

import { Goalkeeper } from "./players/Goalkeeper.js";
import { Defender } from "./players/Defender.js";
import { Midfielder } from "./players/Midfielder.js";
import { Striker } from "./players/Striker.js";

const teamJethalal = new Team("Team Jethalal");
const teamBhide = new Team("Team Bhide");

// Team Jethalal

// Goalkeeper
teamJethalal.addPlayer(
    new Goalkeeper(1, "Champaklal", 1, 75, 60, 95)
);

// Defenders
teamJethalal.addPlayer(
    new Defender(2, "Bagha", 2, 45, 82, 85)
);

teamJethalal.addPlayer(
    new Defender(3, "Nattu Kaka", 3, 40, 80, 70)
);

teamJethalal.addPlayer(
    new Defender(4, "Bawri", 4, 42, 78, 82)
);

teamJethalal.addPlayer(
    new Defender(5, "Magan", 5, 46, 79, 76)
);

// Midfielders
teamJethalal.addPlayer(
    new Midfielder(6, "Taarak Mehta", 6, 84, 96, 86)
);

teamJethalal.addPlayer(
    new Midfielder(7, "Jethalal", 7, 88, 94, 82)
);

teamJethalal.addPlayer(
    new Midfielder(8, "Tapu", 8, 85, 91, 92)
);

// Strikers
teamJethalal.addPlayer(
    new Striker(9, "Goli", 9, 97, 78, 88)
);

teamJethalal.addPlayer(
    new Striker(10, "Pinku", 10, 90, 84, 90)
);

teamJethalal.addPlayer(
    new Striker(11, "Gogi", 11, 92, 82, 91)
);

// Team Bhide

// Goalkeeper
teamBhide.addPlayer(
    new Goalkeeper(12, "Madhavi", 1, 78, 62, 94)
);

// Defenders
teamBhide.addPlayer(
    new Defender(13, "Popatlal", 2, 45, 81, 75)
);

teamBhide.addPlayer(
    new Defender(14, "Iyer", 3, 48, 83, 78)
);

teamBhide.addPlayer(
    new Defender(15, "Komal", 4, 40, 77, 70)
);

teamBhide.addPlayer(
    new Defender(16, "Roshan Singh Sodhi", 5, 50, 80, 88)
);

// Midfielders
teamBhide.addPlayer(
    new Midfielder(17, "Bhide", 6, 86, 97, 84)
);

teamBhide.addPlayer(
    new Midfielder(18, "Anjali", 7, 82, 91, 85)
);

teamBhide.addPlayer(
    new Midfielder(19, "Sonu", 8, 84, 92, 91)
);

// Strikers
teamBhide.addPlayer(
    new Striker(20, "Abdul", 9, 96, 81, 87)
);

teamBhide.addPlayer(
    new Striker(21, "Roshan", 10, 89, 85, 89)
);

teamBhide.addPlayer(
    new Striker(22, "Dr. Hathi", 11, 94, 76, 72)
);

// Match Components

const scoreBoard = new ScoreBoard();

const statistics = new MatchStatistics();

const commentary = new HindiCommentary();

// Match Duration = 60 seconds
const match = new Match(
    teamJethalal,
    teamBhide,
    commentary,
    scoreBoard,
    statistics,
    60
);

// Start Match
match.startMatch();
