export interface Fighter<T> {

    attack(fighter: T): void;
    takeDamage(damage: number): number;
}