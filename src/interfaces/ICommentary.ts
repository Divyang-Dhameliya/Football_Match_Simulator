import { Player } from "../players/Player.js";
import { Team } from "../Team.js";

export interface ICommentary {

    matchStarted(homeTeam: Team, awayTeam: Team): void;

    kickOff(team: Team, player: Player): void;

    running(player: Player): void;

    passing(from: Player, to: Player): void;

    specialAction(player: Player): void;

    shooting(player: Player): void;

    goal(player: Player): void;

    save(player: Player): void;

    celebration(player: Player): void;

    winner(team: Team): void;

}