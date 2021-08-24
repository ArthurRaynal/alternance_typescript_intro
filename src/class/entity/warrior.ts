import {Character} from "./character";
import {Weapon} from "../weapons/weapon";

export class Warrior extends Character {
    constructor(weapon: Weapon,name?: string, gender?: string) {
        super(weapon,name,gender);
        this.hp = 700;
    }
}