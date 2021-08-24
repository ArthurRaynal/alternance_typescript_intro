import {Enemy} from './enemy';
import {Fighter} from "../../interface/Fighter";
import {Weapon} from "../weapons/weapon";

export abstract class Character implements Fighter<Character> {
    name: string;
    gender: string;
    hp: number;
    ap: number;
    weapon: Weapon

    protected constructor(weapon: Weapon,name?: string, gender?: string, ) {
        this.name = name ? name : 'name'
        this.hp = 500
        this.gender = gender ? gender : 'gender'
        this.ap = Math.floor(Math.random() * (100 + 1));
        this.weapon = weapon;
    }

    summary() {
        console.log(`${this.name} [ HP: ${Math.round(this.hp)} | AP: ${Math.round(this.ap)} ] ${this.weapon.name} [ ATK: +${Math.round((this.weapon.damage*100)-100) }% | DEF: -${Math.round((this.weapon.defense*100))}% ]`)
    }

    attack(fighter: Enemy) {
        fighter.summary();
        let attack = this.ap * this.weapon.damage
        fighter.takeDamage(attack);
    }

    takeDamage(damage: number){
        let heroPrivilege = .5;
        let damageTaken = (damage*(heroPrivilege-this.weapon.defense));
        console.log('Damage taken : '+ Math.round(damageTaken));
        return this.hp -= damageTaken;
    }
}