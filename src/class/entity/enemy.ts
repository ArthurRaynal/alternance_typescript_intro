import {Character} from "./character";
import {Fighter} from "../../interface/Fighter";


export class Enemy implements Fighter<Character> {
    name: string;
    hp: number;
    ap: number;

    constructor() {
        this.name = 'Enemy';
        this.ap = Math.floor(Math.random() * (100 + 1));
        // this.hp = Math.floor(Math.random() * (100 - 50 + 1)) + 50;
        this.hp = 200;
    }

    summary() {
        console.log(`${this.name} [ HP: ${Math.round(this.hp)} | AP: ${Math.round(this.ap)} ]`)
    }

    attack(fighter: Character) {
        fighter.summary();
        fighter.takeDamage(this.ap);
    }

    takeDamage(damage: number) {
        console.log('Damage taken : '+ Math.round(damage))
        return this.hp -= damage;
    }
}