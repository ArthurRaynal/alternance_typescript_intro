import {Weapon} from "./class/weapons/weapon";
import {Character} from './class/entity/character';
import {Enemy} from './class/entity/enemy';
import {charCreationPrompt, escapePrompt, fightPrompt} from './prompts'
import {Warrior} from "./class/entity/warrior";
import {Mage} from "./class/entity/mage";
import {Axe} from "./class/weapons/axe";
import {Staff} from "./class/weapons/staff";
import {Bow} from "./class/weapons/bow";

const prompts = require('prompts');

async function fight(choice: number, char: Character) {
    let enemy = new Enemy();
    if (choice === 1) {
        console.log('you fight')
        do {
            char.attack(enemy)
            console.log('-----------------------')
            if (enemy.hp > 0) {
                console.log('The enemy fights back !')
                enemy.attack(char)
                console.log('-----------------------')
            }
        } while (enemy.hp > 0 && char.hp > 0)
        if (char.hp <= 0) {
            console.log('GAME OVER ! You died.')
        } else {
            console.log('You have defeated the enemy')
        }
    } else {
        console.log('you try to run')
        const escapeResponse = await prompts(escapePrompt);
        coinFlip();
        console.log(coinFlip());
        if (coinFlip() === escapeResponse.coinFlip) {
            console.log('You manage to escape !')
        } else {
            console.log('You fail to escape !')
            await fight(1, char);
        }
    }
}

function coinFlip(): string {
    return Math.random() > 0.5 ? 'heads' : 'tails';
}

function charCreation(classChoice: number, name: string, gender: string, weapon: Weapon) {
    let myChar: Character;
    if (classChoice == 1) {
        myChar = new Warrior(weapon, name, gender);
    } else {
        myChar = new Mage(weapon, name, gender);
    }
    return myChar;
}

function weapSelection(weaponChoice: number) {
    let myWeap: Weapon;
    if (weaponChoice == 0) {
        myWeap = new Axe();
    } else if (weaponChoice == 1) {
        myWeap = new Bow();
    } else {
        myWeap = new Staff();
    }
    return myWeap;
}

// async function getLine(): Promise<any> {
//     const response = await fetch('https://kaamelott.hotentic.com/api/random/personnage/Le%20Ma%C3%AEtre%20d\'Armes');
//     const body = await response.json();
//     return body;
// }

(async () => {
    // const data = await getLine();
    // console.log(data)
    const charCreationResponse = await prompts(charCreationPrompt);
    let myWeap = weapSelection(charCreationResponse.weapon)
    let myChar = charCreation(charCreationResponse.class, charCreationResponse.username, charCreationResponse.gender, myWeap);
    console.log(myWeap.name)
    myChar.summary();
    do {
        console.log('Foe is approaching !')
        const fightResponse = await prompts(fightPrompt);
        await fight(fightResponse.choice, myChar);
    } while (myChar.hp > 0)
})();