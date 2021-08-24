import {Character} from "./character";
import {Fighter} from "../interface/Fighter";


export class Enemy implements Fighter<Character> {
    name: string;
    hp: number;
    ap: number;

    constructor() {
        this.name = 'Enemy';
        this.ap = Math.floor(Math.random() * (100 + 1));
        this.hp = Math.floor(Math.random() * (100 - 50 + 1)) + 50;
    }

    summary() {
        console.log(`${this.name} [ HP: ${this.hp} | AP: ${this.ap} ]`)
    }

    attack(fighter: Character) {
        fighter.summary();
        fighter.takeDamage(this.ap);
    }

    takeDamage(damage: number) {
        console.log('Damage taken : '+ damage)
        return this.hp -= damage;
    }
}