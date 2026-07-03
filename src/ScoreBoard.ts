export class ScoreBoard {

    private homeGoals: number = 0;
    private awayGoals: number = 0;

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