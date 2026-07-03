import type { ICommentary } from "./interfaces/ICommentary.js";
import { Player } from "./players/Player.js";
import { Team } from "./Team.js";
import { PlayerRole } from "./enums/PlayerRole.js";

export class HindiCommentary implements ICommentary {

    matchStarted(homeTeam: Team, awayTeam: Team): void {

        console.log("======================================");
        console.log("        FOOTBALL MATCH SIMULATOR");
        console.log("======================================");

        console.log(`${homeTeam.getName()} vs ${awayTeam.getName()}`);

        console.log("\nSwagat hai dosto!");
        console.log("Aaj ka mukabla shuru hone wala hai.\n");
    }

    kickOff(team: Team, player: Player): void {

        console.log("--------------------------------------");
        console.log("Kick Off!");
        console.log(`${team.getName()} ne match ki shuruaat ki.`);
        console.log(`Ball ${player.getName()} ke paas hai.\n`);

    }

    running(player: Player): void {

        console.log(`${player.getName()} ball lekar aage badh raha hai.`);

    }

    passing(from: Player, to: Player): void {

        console.log(`${from.getName()} ne ${to.getName()} ko pass diya.`);

    }

    shooting(player: Player): void {

        console.log(`${player.getName()} ne goal ki taraf shot maara.`);

    }

    goal(player: Player): void {

        console.log("\nGOOOOOAAALLLL!!");
        console.log(`${player.getName()} ne shandaar goal kar diya!\n`);

    }

    save(player: Player): void {

        console.log("\nKya kamaal ka save!");
        console.log(`${player.getName()} ne pakka goal bacha liya.\n`);

    }

    celebration(player: Player): void {

        console.log(`${player.getName()} apni team ke saath khushi mana raha hai.`);

    }

    winner(team: Team): void {

        console.log("--------------------------------------");
        console.log("Match Samapt!");
        console.log(`Aaj ka vijeta hai ${team.getName()}.`);
        console.log("Bahut hi shandaar mukabla dekhne ko mila.");
        console.log("--------------------------------------");

    }

    specialAction(player: Player): void {

        switch (player.getRole()) {

            case PlayerRole.STRIKER:
                console.log(`${player.getName()} ne zabardast shot ki taiyaari kar li.`);
                break;

            case PlayerRole.MIDFIELDER:
                console.log(`${player.getName()} ne ek lamba aur shandaar pass diya.`);
                break;

            case PlayerRole.DEFENDER:
                console.log(`${player.getName()} ne mazboot tackle dikhaya.`);
                break;

            case PlayerRole.GOALKEEPER:
                console.log(`${player.getName()} ne kamaal ka save kiya.`);
                break;

        }

    }

}