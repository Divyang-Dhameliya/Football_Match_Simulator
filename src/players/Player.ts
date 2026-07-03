import { PlayerRole } from "../enums/PlayerRole.js";

export abstract class Player {
 
    constructor(
        protected id: number,
        protected name: string,
        protected jerseyNumber: number,
        protected role: PlayerRole,
 
        // Skills
        protected shooting: number,
        protected passing: number,
        protected running: number
    ) {}
 
    // Common action
    run(): void {
        // running logic
    }
 
    // Common action
    celebrate(): void {
        // celebration logic
    }
 
    getName(): string {
        return this.name;
    }
 
    getRole(): PlayerRole {
        return this.role;
    }
 
    getPassingSkill(): number {
        return this.passing;
    }
 
    getShootingSkill(): number {
        return this.shooting;
    }
 
    getRunningSkill(): number {
        return this.running;
    }
 
    // Every player defines their own special action
    abstract performSpecialAction(): void;
 
    // Every player tells which roles it can pass to
    abstract getAllowedReceiverRoles(): PlayerRole[];
}