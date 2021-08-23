export class Character {
    name: string;
    gender: string;
    hp: number;

    constructor(name?:string, gender?:string) {
        this.name = name? name : 'name'
        this.hp = 10
        this.gender = gender? gender : 'gender'
    }

    summary() {
        console.log(this)
    }
}