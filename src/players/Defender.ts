import { Player } from "./Player.js";
import { PlayerRole } from "../enums/PlayerRole.js";

export class Defender extends Player {

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
            PlayerRole.DEFENDER,
            shooting,
            passing,
            running
        );
    }

    performSpecialAction(): void {}

    getAllowedReceiverRoles(): PlayerRole[] {
        return [
            PlayerRole.DEFENDER,
            PlayerRole.MIDFIELDER
        ];
    }

}