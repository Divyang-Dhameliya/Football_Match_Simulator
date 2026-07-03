import { Player } from "./Player.js";
import { PlayerRole } from "../enums/PlayerRole.js";

export class Striker extends Player {

    constructor(
        id: number,
        name: string,
        jerseyNumber: number,
        shooting: number,
        passing: number,
        running: number
    ) {
        super(
            id,
            name,
            jerseyNumber,
            PlayerRole.STRIKER,
            shooting,
            passing,
            running
        );
    }

    performSpecialAction(): void {}

    getAllowedReceiverRoles(): PlayerRole[] {
        return [
            PlayerRole.MIDFIELDER
        ];
    }
}