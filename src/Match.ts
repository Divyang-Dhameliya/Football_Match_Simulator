import type { ICommentary } from "./interfaces/ICommentary.js";
import { Player } from "./players/Player.js";
import { Goalkeeper } from "./players/GoalKeeper.js";
import { Team } from "./Team.js";
import { ScoreBoard } from "./ScoreBoard.js";
import { MatchStatistics } from "./MatchStatistics.js";
import { PlayerRole } from "./enums/PlayerRole.js";

export class Match {

    private attackingTeam!: Team;
    private currentBallHolder!: Player;

    private readonly matchDuration: number;

    constructor(
        private homeTeam: Team,
        private awayTeam: Team,
        private commentary: ICommentary,
        private scoreBoard: ScoreBoard,
        private statistics: MatchStatistics,
        matchDuration: number = 60
    ) {
        this.matchDuration = matchDuration;
    }

    // Starts the complete match
    startMatch(): void {
        this.commentary.matchStarted(
            this.homeTeam,
            this.awayTeam
        );
        this.sleep(1500);

        const startingTeam = this.coinToss();

        this.kickOff(startingTeam);

        const startTime = Date.now();

        while (
            (Date.now() - startTime) / 1000 <
            this.matchDuration
        ) {

            this.playTurn();

        }

        this.displayWinner();

        this.statistics.displayStatistics();
    }

    // Randomly decides which team starts
    private coinToss(): Team {

        const random = Math.random();

        const tossWinner =
            random < 0.5
                ? this.homeTeam
                : this.awayTeam;

        console.log("\nCoin Toss...");

        console.log(
            `${tossWinner.getName()} won the toss.`
        );

        return tossWinner;

    }

    // Starts play after toss or after a goal
    private kickOff(team: Team): void {
        this.attackingTeam = team;

        this.currentBallHolder =
            team.getRandomPlayerByRole(
                PlayerRole.MIDFIELDER
            );

        this.commentary.kickOff(
            team,
            this.currentBallHolder
        );
        this.sleep(1500);
    }

    // Executes one attacking move
    private playTurn(): void {
        // Player runs except GoalKeeper

        if(this.currentBallHolder.getRole() !== PlayerRole.GOALKEEPER) {
            this.currentBallHolder.run();
            this.commentary.running(this.currentBallHolder);
            this.sleep(1500);
        }

        // Player performs special action
        this.currentBallHolder.performSpecialAction();
        this.commentary.specialAction(this.currentBallHolder);
        this.sleep(1500);

        // If striker, attempt a shot
        if (this.currentBallHolder.getRole() === PlayerRole.STRIKER) {

            this.shoot();
            return;

        }

        // Select teammate to receive the ball
        const receiver = this.selectReceiver();

        this.commentary.passing(
            this.currentBallHolder,
            receiver
        );
        this.sleep(1500);

        this.statistics.increasePasses();

        this.currentBallHolder = receiver;
    }

    // Selects the next receiver
    private selectReceiver(): Player {

        const allowedRoles =
            this.currentBallHolder.getAllowedReceiverRoles();

        const randomRole =
            allowedRoles[
            Math.floor(Math.random() * allowedRoles.length)
            ];

        return this.attackingTeam.getRandomPlayerByRoleExcept(
            randomRole!,
            this.currentBallHolder
        );

    }

    // Striker shoots
    private shoot(): void {
        this.statistics.increaseShots();

        this.commentary.shooting(this.currentBallHolder);
        this.sleep(1500);

        const defendingTeam =
            this.attackingTeam === this.homeTeam
                ? this.awayTeam
                : this.homeTeam;

        const goalkeeper = defendingTeam.getGoalkeeper();

        const isGoal = this.calculateGoal(
            this.currentBallHolder,
            goalkeeper
        );

        if (isGoal) {
            this.goal(this.attackingTeam);
        } else {
            this.save(goalkeeper, defendingTeam);
        }
    }

    // Calculates goal or save
    private calculateGoal(
        striker: Player,
        goalkeeper: Goalkeeper
    ): boolean {
        let goalChance =
            striker.getShootingSkill()
            - goalkeeper.getSavingSkill()
            + 50;

        goalChance = Math.max(20, Math.min(80, goalChance));

        const randomNumber = Math.floor(Math.random() * 100) + 1;

        return randomNumber <= goalChance;

    }

    // Handles a goal
    private goal(scoringTeam: Team): void {
        this.statistics.increaseGoals();

        this.commentary.goal(this.currentBallHolder);
        this.sleep(1500);

        this.currentBallHolder.celebrate();

        this.commentary.celebration(this.currentBallHolder);
        this.sleep(1500);

        if (scoringTeam === this.homeTeam) {
            this.scoreBoard.goalForHomeTeam();
        } else {
            this.scoreBoard.goalForAwayTeam();
        }

        this.scoreBoard.displayScore(
            this.homeTeam.getName(),
            this.awayTeam.getName()
        );

        const nextTeam =
            scoringTeam === this.homeTeam
                ? this.awayTeam
                : this.homeTeam;

        this.kickOff(nextTeam);
    }

    // Handles a save
    private save(goalkeeper: Goalkeeper, defendingTeam: Team): void {
        this.statistics.increaseSaves();

        this.commentary.save(goalkeeper);
        this.sleep(1500);

        this.attackingTeam = defendingTeam;

        this.currentBallHolder = goalkeeper;
    }

    // Prints winner
    private displayWinner(): void {
        const homeGoals = this.scoreBoard.getHomeGoals();
        const awayGoals = this.scoreBoard.getAwayGoals();

        console.log("\n==================================");
        console.log("         MATCH FINISHED");
        console.log("==================================");

        this.scoreBoard.displayScore(
            this.homeTeam.getName(),
            this.awayTeam.getName()
        );

        if (homeGoals > awayGoals) {

            this.commentary.winner(this.homeTeam);
            this.sleep(1500);

        } else if (awayGoals > homeGoals) {

            this.commentary.winner(this.awayTeam);
            this.sleep(1500);

        } else {

            console.log("Match Draw Ho Gaya!");
            console.log("Dono teams ne shandaar khel dikhaya.");

        }
    }

    // Delay function
    private sleep(milliseconds : number) : void {
        const endTime = Date.now() + milliseconds;

        while(Date.now() < endTime) {}
    }

}