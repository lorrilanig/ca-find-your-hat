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
            if(!this.inBounds()) {
                console.log("That move was out of bounds.")
                playing = false;
                break;
            } else if (this.onHole()) {
                console.log("Oh no, you fell in a hole")
                playing = false;
                break;
            } else if (this.onHat()) {
                console.log("You found your hat!");
                playing = false;
                break;
            }
        
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
            return (
                this.row >= 0 &&
                this.row <= this.field[0].length &&
                this.col >= 0 &&
                this.col <= this.field.length
            )
        }
        onHat(){
            return this.field[this.col][this.row] === hat;
        }
        onHole(){
            return this.field[this.col][this.row] === hole;
        }
    static generateField(height, width, percentage = 0.1) {
        const field = new Array(height).fill(0).map(el => new Array(width));
        for (let y = 0; y < height; y++) {
            for (let x = 0; x < width; x++) {
                const prob = Math.random();
                field[y][x] = prob > percentage ? fieldCharacter : hole;
            }
        }
        //set hat location
        const hatLocation = {
            x: Math.floor(Math.random() * width),
            y: Math.floor(Math.random() * height)
        };
        field[hatLocation.y][hatLocation.x] = hat;
        return field;
    }
}
let myField = new Field([
    [pathCharacter, fieldCharacter, hole],
    [fieldCharacter, hole, fieldCharacter],
    [fieldCharacter, hat, fieldCharacter]
])

myField = new Field(Field.generateField(10,10,0.2));

//myField.print();

myField.runGame();