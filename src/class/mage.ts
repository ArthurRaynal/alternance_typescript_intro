import {Character} from "./character";

export class Mage extends Character {
    constructor(name?: string, gender?: string) {
        super(name,gender);
        this.ap = Math.floor(Math.random() * (30 - 1 + 1)) + 30;
    }
}