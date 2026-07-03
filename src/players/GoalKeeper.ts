import { Player } from "./Player.js";
import { PlayerRole } from "../enums/PlayerRole.js";

export class Goalkeeper extends Player {
    private saving: number;

    constructor(
        id: number,
        name: string,
        jerseyNumber: number,
        passing: number,
        running: number,
        saving:number
    ) {
        super(
            id,
            name,
            jerseyNumber,
            PlayerRole.GOALKEEPER,
            0,
            passing,
            running,
        );

        this.saving = saving;
    }

    getSavingSkill(): number {
        return this.saving;
    }
    performSpecialAction(): void {}

    getAllowedReceiverRoles(): PlayerRole[] {
        return [
            PlayerRole.DEFENDER,
            PlayerRole.MIDFIELDER
        ];
    }

}