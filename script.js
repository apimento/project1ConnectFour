/*WISH-LIST:
PLAYER vs. CPU MODE
ANIMATIONS FOR CHIPS DROPPING DOWN
 */ 


/* CACHED ELEMENTS */ 
let tableRow = document.getElementsByTagName(`tr`); 
let tableCell = document.getElementsByTagName(`td`); 
let tableSlot = document.querySelector(`.slot`);  
const playerTurn = document.querySelector(`.player-turn`); 
const reset = document.querySelector(`.reset`); 
let active1 = document.querySelector(`.active1`);
let active2 = document.querySelector(`.active2`); 
let winIcon = document.querySelector(`#winner`); 
let winMessage = document.querySelector(`#message`); 
let clickAudio = document.querySelector(`#clickAudio`); 
let resetAudio = document.querySelector(`#resetAudio`); 
let winAudio = document.querySelector(`#winAudio`); 
let drawAudio = document.querySelector(`#drawAudio`);

/*VARIABLES*/
const player1Color = 'rgb(51,82,128)'; 
const player2Color = 'rgb(223,244,255)'; 

let currentPlayer = 1; 


/* LISTENERS (+ const Elements) */
reset.addEventListener("click" , function(e){ 
    resetBoard(e)
    playResetAudio(e)
});

Array.prototype.forEach.call(tableCell, (cell) =>{ 
    cell.addEventListener('click' , function(e){ 
        cellPopulated(e) 
        toggleCurrentPlayer()
        playClickAudio(e)
    }); 
    cell.style.backgroundColor = 'rgb(190, 192, 201)'; 
});


/* FUNCTIONS */
function cellPopulated (e){ 
    let column = e.target.cellIndex; 
    let row = []; 

    for(let i =5; i> -1; i--){ 
        if (tableRow[i].children[column].style.backgroundColor == 'rgb(190, 192, 201)'){ 
            row.push(tableRow[i].children[column]); 
            if (currentPlayer ===1) { 
                row[0].style.backgroundColor = player1Color;
                if (horizontalCheck() || verticalCheck() || diagonalCheck1() || diagonalCheck2()) { 
                    playWinAudio(e);
                    winIcon.style.display = "inline-flex";
                    winIcon.style.backgroundColor = player1Color;
                    winMessage.style.display = "flex" ;
                } else if(drawCheck()) { 
                    playDrawAudio(e); 
                    winMessage.innerText = "DRAW"; 
                    winMessage.style.display = "flex" ;
                }else{
                return currentPlayer = 2;
                }
                } else {   
                row[0].style.backgroundColor = player2Color; 
                if (horizontalCheck() || verticalCheck() || diagonalCheck1() || diagonalCheck2()) { 
                    playWinAudio(e);
                    winIcon.style.display = "inline-flex";
                    winIcon.style.backgroundColor = player2Color;
                    winMessage.style.display = "flex" ;
                }else if(drawCheck()) { 
                    playDrawAudio(e); 
                    winMessage.innerText = "DRAW"; 
                    winMessage.style.display = "flex" ;
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
    } else { 
        console.log(active2);
        active2.style.display = "block"; 
        active1.style.display = "none"; 
        active2.style.border = "1px solid black"; 
        active1.style.border = "none";  
    }
}

/* (AUDIO) FUNCTIONS */
function playClickAudio (e){ 
    clickAudio.play("Bamboo.wav");
} 

function playWinAudio (e){ 
    winAudio.play("Alesis-Fusion-Shakuhachi-C5.wav");
}

function playResetAudio (e) { 
    resetAudio.play("Esoniq-VFX-SD-Ride-Cymbal.wav");
}

function playDrawAudio(e) { 
    drawAudio.play("Ensoniq-SQ-1-Biwa-C4.wav");
}

/*(BOARD CHECKING) FUNCTIONS*/
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

/* RESET */
function resetBoard(){ 
    Array.prototype.forEach.call(tableCell, (cell) =>{ 
        cell.style.backgroundColor = 'rgb(190, 192, 201)'; 
        winIcon.style.display = "none"; 
        winMessage.style.display = "none";
    });
} 
