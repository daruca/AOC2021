const path = require('path');
const fs = require('fs');

const input = fs.readFileSync(path.join(__dirname, 'input2.txt'))
                .toString()
                .trim()
                .split('/\r?\n/');

function calculate()
{                
    let horiz = 0;
    let depth = 0;
    for (let i = 0; i < input.length; i++)
    {
        //Intruction value
        switch (input[i].split(' ')[0]){
            case 'forward':
                horiz += parseInt(input[i].split(' ')[1]);
                break;
            case 'up':
                depth -= parseInt(input[i].split(' ')[1]);
                break;
            case 'down':
                depth += parseInt(input[i].split(' ')[1]);
                break;
            

        }
    }
    return horiz*depth;
}

function calculateAim()
{                
    let horiz = 0;
    let depth = 0;
    let aim = 0;
    for (let i = 0; i < input.length; i++)
    {
        //Intruction value
        switch (input[i].split(' ')[0]){
            case 'forward':
                horiz += parseInt(input[i].split(' ')[1]);
                depth += aim * parseInt(input[i].split(' ')[1]);
                break;
            case 'up':
                aim -= parseInt(input[i].split(' ')[1]);
                break;
            case 'down':
                aim += parseInt(input[i].split(' ')[1]);
                break;
            

        }
    }
    return horiz*depth;
}

console.log(calculate());
console.log(calculateAim());
//console.log(count_increases(3));