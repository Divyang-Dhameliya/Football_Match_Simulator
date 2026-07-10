import { Player } from "./players/Player.js";

import { PlayerRole } from "./enums/PlayerRole.js";
import { Goalkeeper } from "./players/Goalkeeper.js";

export class Team {

    private players: Player[] = [];

    constructor(private name: string) { }

    getName(): string {
        return this.name;
    }

    addPlayer(player: Player): void {
        this.players.push(player);
    }

    getPlayers(): Player[] {
        return this.players;
    }

    displayPlayers(): void {

        console.log(`\n${this.name} Players`);

        this.players.forEach(player => {
            console.log(
                `${player.getName()} - ${player.getRole()}`
            );
        });

    }

    // Returns the team's goalkeeper
    getGoalkeeper(): Goalkeeper {

        for (const player of this.players) {

            if (player instanceof Goalkeeper) {
                return player;
            }

        }

        throw new Error("Goalkeeper not found!");

    }

    // Returns a random player of the requested role
    getRandomPlayerByRole(role: PlayerRole): Player {

        const filteredPlayers = this.players.filter(
            player => player.getRole() === role
        );

        if(filteredPlayers.length === 0) {
            throw new Error(
                `${this.name} does not have any ${role}.`
            );
        }

        const randomIndex = Math.floor(
            Math.random() * filteredPlayers.length
        );

        return filteredPlayers[randomIndex]!;

    }

    // Returns a random player of the requested role
    getRandomPlayerByRoleExcept(role: PlayerRole, currentPlayer: Player): Player {

        const filteredPlayers = this.players.filter(
            player => player.getRole() === role && player !== currentPlayer
        );

        if(filteredPlayers.length === 0) {
            throw new Error(
                `${this.name} does not have any ${role}.`
            );
        }

        const randomIndex = Math.floor(
            Math.random() * filteredPlayers.length
        );

        return filteredPlayers[randomIndex]!;

    }

}