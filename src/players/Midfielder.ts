import { Player } from "./Player.js";
import { PlayerRole } from "../enums/PlayerRole.js";

export class Midfielder extends Player {

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
            PlayerRole.MIDFIELDER,
            shooting,
            passing,
            running
        );
    }

    performSpecialAction(): void {}

    getAllowedReceiverRoles(): PlayerRole[] {
        return [
            PlayerRole.DEFENDER,
            PlayerRole.MIDFIELDER,
            PlayerRole.STRIKER
        ];
    }
}