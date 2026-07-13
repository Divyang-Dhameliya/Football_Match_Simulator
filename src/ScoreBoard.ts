import { ZER0_VALUE } from "./constants.js";

export class ScoreBoard {

    private homeGoals: number = ZER0_VALUE;
    private awayGoals: number = ZER0_VALUE;

    goalForHomeTeam(): void {
        this.homeGoals++;
    }

    goalForAwayTeam(): void {
        this.awayGoals++;
    }

    getHomeGoals(): number {
        return this.homeGoals;
    }

    getAwayGoals(): number {
        return this.awayGoals;
    }

    displayScore(homeTeamName: string, awayTeamName: string): void {

        console.log("\n----------------------------------");
        console.log("Current Score");
        console.log(
            `${homeTeamName} ${this.homeGoals} - ${this.awayGoals} ${awayTeamName}`
        );
        console.log("----------------------------------");

    }

}