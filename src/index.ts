const prompts = require('prompts');
import {Character} from './class/character';

const questions = [
    {
        type: 'text',
        name: 'username',
        message: 'What is your character name?'
    },
    {
        type: 'select',
        name: 'gender',
        message: 'What is your gender ?',
        choices: [
            { title: 'Male', value: 'Male' },
            { title: 'Female', value: 'Female' },
        ]
    },
];

(async () => {
    const response = await prompts(questions);
    let myChar = new Character(response.username,response.gender)
    myChar.summary()
    console.log('Foe is approaching !')
})();