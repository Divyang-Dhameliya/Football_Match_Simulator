import { ZER0_VALUE } from "./constants.js";

export class MatchStatistics {

    private goals: number = ZER0_VALUE;
    private shots: number = ZER0_VALUE;
    private passes: number = ZER0_VALUE;
    private saves: number = ZER0_VALUE;

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