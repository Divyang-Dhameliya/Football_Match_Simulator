export class MatchStatistics {

    private goals: number = 0;
    private shots: number = 0;
    private passes: number = 0;
    private saves: number = 0;

    increaseGoals(): void {
        this.goals++;
    }

    increaseShots(): void {
        this.shots++;
    }

    increasePasses(): void {
        this.passes++;
    }

    increaseSaves(): void {
        this.saves++;
    }

    displayStatistics(): void {

        console.log("\n==============================");
        console.log(" MATCH STATISTICS");
        console.log("==============================");

        console.log(`Goals : ${this.goals}`);
        console.log(`Shots : ${this.shots}`);
        console.log(`Passes : ${this.passes}`);
        console.log(`Saves : ${this.saves}`);

        console.log("==============================");

    }

}