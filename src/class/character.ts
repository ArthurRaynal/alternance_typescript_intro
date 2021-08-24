import {Enemy} from './enemy';
import {Fighter} from "../interface/Fighter";

export abstract class Character implements Fighter<Character> {
    name: string;
    gender: string;
    hp: number;
    ap: number;

    protected constructor(name?: string, gender?: string) {
        this.name = name ? name : 'name'
        this.hp = 500
        this.gender = gender ? gender : 'gender'
        this.ap = Math.floor(Math.random() * (100 + 1));
    }

    summary() {
        console.log(`${this.name} [ HP: ${this.hp} | AP: ${this.ap} ]`)
    }

    attack(fighter: Enemy) {
        fighter.summary();
        fighter.takeDamage(this.ap);
    }

    takeDamage(damage: number){
        console.log('Damage taken : '+ damage*.5)
        return this.hp -= (damage*.5);
    }
}