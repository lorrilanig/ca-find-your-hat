//test run with node main.js

const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

class Field {
    constructor(field){
        this.field = [field];
    }
    //method prints out field in 'board' format
    print(){
        for (let i = 0; i < this.field.length; i++) {
            this.field[i].forEach(arr => {
                arr = arr.join("");
                console.log(arr);
            })
        }}
    //method to handle user input and update location

    //method to test current location, win, hole or out-of-bounds

    //method to run the main game until game is won or lost

    
}
const myField = new Field([
    [pathCharacter, fieldCharacter, hole],
    [fieldCharacter, hole, fieldCharacter],
    [fieldCharacter, hat, fieldCharacter]
])

myField.print()