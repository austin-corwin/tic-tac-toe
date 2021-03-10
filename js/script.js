let players = [];
const gridItems = document.querySelectorAll('.grid-item');
// console.log(gridItems);

const player = (name,sign)=>{
    let _score = 0;
    const getScore = ()=> _score;
    const _playerWon = ()=>{
        console.log('you win!');
    }
    const playerScored = ()=>{
        _score++
        getScore();
        if (_score > 2){
            _playerWon();
        }
    }
    return {
        name,
        sign,
        getScore,
        playerScored
    }
}

let player1 = player('Austin','X');
let player2 = player('Courtney','0');

players.push(player1);
players.push(player2);

console.log(players);

let board = [];


gridItems.forEach((gridItem)=>{
    board.push(gridItem.innerText);
});

    
