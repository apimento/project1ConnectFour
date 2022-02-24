//TO DO: MODAL MESSAGE FOR WINNER 
//arrange elements according to wireframe
//CSS: BUILD DESIGN ELEMENTS - stands, shadow 

let tableRow = document.getElementsByTagName(`tr`); 
let tableCell = document.getElementsByTagName(`td`); 
let tableSlot = document.querySelector(`.slot`);  
const playerTurn = document.querySelector(`.player-turn`); 
const reset = document.querySelector(`.reset`); 
let modal1 = document.getElementById("myModal1"); 
let modal2 = document.getElementById("myModal2"); 
let modal3 = document.getElementById("myModal3"); 
let span = document.getElementsByClassName("close")[0]; 
// let modalMessage1 = document.getElementById("modalMessage1"); 
// let modalMessage2 = document.getElementById("modalMessage2"); 
// let modalMessage3 = document.getElementById("modalMessage3"); 
let active1 = document.querySelector(`.active1`);
let active2 = document.querySelector(`.active2`);


for (let i = 0; i < tableCell.length; i++){ 
    tableCell[i].addEventListener('click', (e) => {
    console.log(`${e.target.parentElement.rowIndex}, ${e.target.cellIndex}`)
})
}

reset.addEventListener("click" , resetBoard);

const player1Color = 'rgb(19, 73, 134)'; 
const player2Color = 'rgb(225, 229, 247)'; 

let currentPlayer = 1; 

Array.prototype.forEach.call(tableCell, (cell) =>{ 
    cell.addEventListener('click' , function(e){ 
        changeColor(e) 
        toggleCurrentPlayer()
    }); 
    cell.style.backgroundColor = 'rgb(190, 192, 201)'; 
});


function changeColor (e){ 
    let column = e.target.cellIndex; 
    let row = []; 

    for(let i =5; i> -1; i--){ 
        if (tableRow[i].children[column].style.backgroundColor == 'rgb(190, 192, 201)'){ 
            row.push(tableRow[i].children[column]); 
            if (currentPlayer ===1) { 
                row[0].style.backgroundColor = player1Color;
                if (horizontalCheck() || verticalCheck() || diagonalCheck1() || diagonalCheck2()) { 
                    // modal.style.display = "block";
                    // modalMessage.innerText = "PLAYER 1 WINS";
                    console.log("winner!"); 
                } else if(drawCheck()) { 
                    //  modal.style.display = "block";
                    //  modalMessage.innerText= "IT'S A DRAW";
                     console.log("DRAW")
                }else{

                return currentPlayer = 2;
                }
                } else {   
                row[0].style.backgroundColor = player2Color; 
                if (horizontalCheck() || verticalCheck() || diagonalCheck1() || diagonalCheck2()) { 
                    // modal.style.display = "block";
                    // modalMessage.innerText = "PLAYER 2 WINS";
                    console.log('winner!');
                }else if(drawCheck()) { 
                    // modal.style.display = "block";
                    // modalMessage.innerText= "IT'S A DRAW";
                    console.log("DRAW")
               }else{
                return currentPlayer = 1; 
               }
            }
        } 
    }
}  

function toggleCurrentPlayer () { 
    console.log(currentPlayer)
    if( currentPlayer == 1){ 
        active1.style.display = "block"; 
        active2.style.display = "none"; 
        active1.style.border = "1px solid black"; 
        active2.style.border = "none";  
        console.log("string being seen")
    } else { 
        console.log(active2);
        active2.style.display = "block"; 
        active1.style.display = "none"; 
        active2.style.border = "1px solid black"; 
        active1.style.border = "none";  
        console.log("string being seen")
    }
}


function colorMatchCheck(one,two,three,four){ 
    return(one == two && one == three && one == four && one !== 'rgb(190, 192, 201)');
} 

function horizontalCheck(){ 
    for (let row= 0; row < tableRow.length; row++){ 
        for(let col = 0; col < 4; col++){ 
            if(colorMatchCheck(tableRow[row].children[col].style.backgroundColor, tableRow[row].children[col+1].style.backgroundColor, 
                tableRow[row].children[col+2].style.backgroundColor, tableRow[row].children[col+3].style.backgroundColor)){ 
                    return true;
                }
        }
    }
}; 


function verticalCheck(){ 
    for (let col=0; col < 7; col++){ 
        for(let row =0; row < 3; row++){ 
            if (colorMatchCheck(tableRow[row].children[col].style.backgroundColor, tableRow[row+1].children[col].style.backgroundColor, 
                tableRow[row+2].children[col].style.backgroundColor, tableRow[row+3].children[col].style.backgroundColor)){ 
                    return true;
                }
        }
    }
};

function diagonalCheck1(){ 
    for(let col=0; col < 4; col++){
    for(let row=0; row < 3; row++){ 
        if(colorMatchCheck(tableRow[row].children[col].style.backgroundColor, tableRow[row +1].children[col+1].style.backgroundColor,
            tableRow[row+2].children[col+2].style.backgroundColor,tableRow[row+3].children[col+3].style.backgroundColor, )){ 
                return true;
            }
    }
  }
}; 

function diagonalCheck2(){ 
    for(let col=0; col < 4; col++){
    for(let row=5; row >2; row--){ 
        if(colorMatchCheck(tableRow[row].children[col].style.backgroundColor, tableRow[row -1].children[col+1].style.backgroundColor,
            tableRow[row-2].children[col+2].style.backgroundColor,tableRow[row-3].children[col+3].style.backgroundColor, )){ 
                return true;
            }
    }
  }
}; 

function drawCheck() { 
    let fullSlot = []; 
    for(let i=0; i< tableCell.length; i++){ 
        if(tableCell[i].style.backgroundColor !== 'rgb(190, 192, 201)'){ 
            fullSlot.push(tableCell[i]);
        }
    }
    if(fullSlot.length === tableCell.length){ 
        return true;
    }
} ;

function resetBoard(){ 
    Array.prototype.forEach.call(tableCell, (cell) =>{ 
        cell.style.backgroundColor = 'rgb(190, 192, 201)'; 
    });
} 

/* TO CLOSE MODAL BOX */ 
// span.onclick = function() {
//     modal.style.display = "none";
//     resetBoard();
//   }