export const charCreationPrompt = [
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
    {
        type: 'select',
        name: 'class',
        message: 'What class do you want to play ?',
        choices: [
            { title: 'Warrior', value: 1 },
            { title: 'Mage', value: 0 },
        ]
    },
];

export const fightPrompt = [
    {
        type: 'select',
        name: 'choice',
        message: 'A foe is approaching !\n What do you want to do ?',
        choices: [
            { title: 'fight', value: 1 },
            { title: 'run', value: 0 },
        ]
    }
];