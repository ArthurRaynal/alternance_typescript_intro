const prompts = require('prompts');
import {Character} from './class/character';
import {Enemy} from './class/enemy';
import {charCreationPrompt,fightPrompt} from './prompts'
import {Warrior} from "./class/warrior";
import {Mage} from "./class/mage";

function fight(choice: number, char: Character) {
    let enemy = new Enemy();
    if (choice === 1){
        console.log('you fight')
        do {
            char.attack(enemy)
            console.log('-----------------------')
            if (enemy.hp > 0){
                console.log('The enemy fights back !')
                enemy.attack(char)
                console.log('-----------------------')
            }
        } while (enemy.hp > 0 && char.hp > 0)
        if (char.hp <= 0){
            console.log('GAME OVER ! You died.')
        } else {
            console.log('You have defeated the enemy')
        }
    } else {
        console.log('you run')
    }
}

function charCreation(choice: number,name: string,gender:string): Character {
    let myChar: Character;
    if (choice == 1) {
        myChar = new Warrior(name,gender);
    } else {
        myChar = new Mage(name,gender);
    }
    return myChar;
}

(async () => {
    const charCreationResponse = await prompts(charCreationPrompt);
    let myChar = charCreation(charCreationResponse.class,charCreationResponse.username,charCreationResponse.gender);
    myChar.summary();
    console.log('Foe is approaching !')
    const fightResponse = await prompts(fightPrompt);
    await fight(fightResponse.choice, myChar);
})();