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
    for(let i=0; i<index+1;i++){
        for(let j=0;j<matrix.length-1; j++){
           // console.log(matrix[j][i]);
            if (matrix[j][i] == '0'){
                countzero ++;
            }
            else{
                countone ++;
            }
        }      
        //console.log("0: "+countzero);
        //console.log("1: "+countone);
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

function ratingLess(index){
    let more = 2;
    let countzero = 0;
    let countone = 0;    
    for(let i=0; i<index+1;i++){
        for(let j=0;j<matrix.length-1; j++){
           // console.log(matrix[j][i]);
            if (matrix[j][i] == '0'){
                countzero ++;
            }
            else{
                countone ++;
            }
        }      
        //console.log("0: "+countzero);
        //console.log("1: "+countone);
        if (countzero > countone){
            more = 0;
            
        }
        else{
            more = 1;
            
        }
       // console.log(`Column: ${i} we have ${countzero} 0 and ${countone} 1 option to keepzero: ${keepZero}`);
        countone = 0;
        countzero = 0;
    }
    return more;
}

function remove(index, value){
    let matrixTmp = matrix;
    matrix = [];
    for (let i=0; i<matrixTmp.length-1; i++){
        if (matrixTmp[0] != value){
            matrix.push(matrixTmp[i]);
        }
    }
}

function restore(){
    rows = 0;
    matrix = [];
    for (let i = 0; i < input.length; i++){
        matrix.push(input[i]);
        rows++;
    }
}

function liveSupportRating(){
let countzero = 0;
let countone = 0;
let finalvalue = '';
    console.log("matrix->length: "+matrix.length);
    for(let i=0; i<matrix[0].length-1;i++){
        let rat = rating(i);
        //console.log("rating of: "+i+" = "+rat);
        remove(i,rat);
        finalvalue += rat;
    }
console.log('final:'+parseInt(finalvalue,2));
}

function co2Rating(){
let countzero = 0;
let countone = 0;
let finalvalue = '';
    console.log("matrix->length: "+matrix.length);
    for(let i=0; i<matrix[0].length-1;i++){
        let rat = ratingLess(i);
        //console.log("rating of: "+i+" = "+rat);
        remove(i,rat);
        finalvalue += rat;
    }
console.log('finalCo2:'+parseInt(finalvalue,2));
}

//console.log(Power());
let livesupport = liveSupportRating();
restore();
let co2rat = co2Rating();
console.log(livesupport*co2rat);