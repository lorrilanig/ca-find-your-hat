//test run with node main.js

const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

class Field {
    constructor(field = [[]]){
        this.field = field;
        this.row = 0;
        this.col = 0;
        //home location 
        this.field[0][0] = pathCharacter;
    }

    runGame(){
        let playing = true;
        while(playing) {
            this.print();
            this.handleInput();
        
        //update location
        this.field[this.col][this.row] = pathCharacter;
        }
    }
    //method prints out field in 'board' format
    print(){
        const display = this.field.map(row => {
            return row.join('');
        }).join('\n');
        console.log(display);
        }
    //method to handle user input and update location
        handleInput(){
            const answer = prompt('Which way? ').toUpperCase();
            if (answer == 'U') {
                this.col -= 1;
            } else if (answer == 'D'){
                this.col += 1;
            } else if (answer == 'R') {
                this.row += 1
            } else if (answer == 'L') {
                this.row -= 1;
            } else {
                console.log('Enter U, D, L, or R.')
                this.handleInput();
            }
        }
    //method to test current location, win, hole or out-of-bounds
        inBounds(){

        }
        onHat(){

        }
        onHole(){

        }
}
let myField = new Field([
    [pathCharacter, fieldCharacter, hole],
    [fieldCharacter, hole, fieldCharacter],
    [fieldCharacter, hat, fieldCharacter]
])

//myField.print();

myField.runGame();