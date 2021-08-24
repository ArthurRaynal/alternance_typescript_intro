export abstract class Weapon {
    name: string;
    damage: number;
    defense: number;

    protected constructor(name:string, damage:number,defense:number) {
        this.damage = damage;
        this.name = name;
        this.defense = defense;
    }
}