import {Character} from "./character";
import {Weapon} from "../weapons/weapon";

export class Mage extends Character {
    constructor(weapon: Weapon,name?: string, gender?: string) {
        super(weapon,name,gender);
        this.ap = Math.floor(Math.random() * (30 - 1 + 1)) + 30;
    }
}