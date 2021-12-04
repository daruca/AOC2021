const path = require('path');
const fs = require('fs');

const input = fs.readFileSync(path.join(__dirname, 'input3.txt'))
                .toString()
                .trim()
                .split('\n');

let rows = 0;
let finalGamma = [];
let finalEpsilon = [];
let matrix = [];

for (let i = 0; i < input.length; i++){
    matrix.push(input[i]);
    rows++;
}

function Power(){
    let countzero = 0;
    let countone = 0;

    //console.log(matrix[0].length);
    for(let i=0; i<matrix[0].length-1;i++){
        for(let j=0;j<rows; j++){
            if (matrix[j][i] == '0'){
                countzero ++;
            }
            else{
                countone ++;
            }
        }      
        if (countzero > countone){
            finalGamma[i] = 0;
            finalEpsilon[i] = 1;
        }
        else{
            finalGamma[i] = 1;
            finalEpsilon[i] = 0;
        }
       // console.log(finalarray)
        countone = 0;
        countzero = 0;
    }
    let gArray = '';
    let eArray = '';
    gArray = finalGamma.join('');
    eArray = finalEpsilon.join('');

    console.log("Gamma:"+parseInt(gArray,2));
    console.log("Epsilon:"+parseInt(eArray,2));
    return parseInt(gArray,2) * parseInt(eArray,2);
}


function rating(index){
    let more = 2;
    let countzero = 0;
    let countone = 0;    
    for(let i=0; i<=index;i++){
        for(let j=0;j<rows; j++){
            if (matrix[j][i] == '0'){
                countzero ++;
            }
            else{
                countone ++;
            }
        }      
        if (countzero > countone){
            more = 1;
            
        }
        else{
            more = 0;
            
        }
       // console.log(`Column: ${i} we have ${countzero} 0 and ${countone} 1 option to keepzero: ${keepZero}`);
        countone = 0;
        countzero = 0;
    }
    return more;
}
function liveSupportRating(){
let countzero = 0;
let countone = 0;


    for(let i=0; i<matrix[0].length-1;i++){
       console.log("Rating of "+i+' ='+rating(i));
    }



}


//console.log(Power());
console.log(liveSupportRating());