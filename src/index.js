import React from 'react';
import ReactDOM from 'react-dom';

import PlayingField from './components/playing-field';


const board123 = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];


let board = new Array(8);
for (let i=0;i<8;i++)
    board[i] = new Array(8);

for (let i=0;i<8;i++)
    for (let j=0;j<8;j++)
    {board[i][j] = {id : String(10*i + j)};}



console.log(board)


const onClickField = (id) => {return console.log(id);}


ReactDOM.render(<PlayingField onClickField={onClickField}>{board}</PlayingField>,document.getElementById('root'));






