import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';


import PlayingField from '../playing-field';

const isInRange = (num, min, max) => {
        return num >= min && num < max;
    }
const getReverseColor = (color) => {
    if (color==="black")
        return "white";
    if (color==="white")
        return "black";

}

const getResInDir = (arr, curr_color, idx1, idx2, step_i, step_j) => { // res in some direction
    let res = 0;
    let i = idx1 + step_i, j = idx2 + step_j;

    while(true){
        if(!isInRange(i,0,8) || !isInRange(j,0,8) || arr[i][j].status==="empty")
            return 0;

        if(arr[i][j].status===curr_color)
            return res;
        if(arr[i][j].status===getReverseColor(curr_color)){
            res++;
            i = i + step_i;
            j = j + step_j;
        }
    }
}

const getResInAllDir = (arr, curr_color, idx1, idx2) => {
    let result = 0;
    //result += getResInDir(arr, curr_color, idx1, idx2, )
    //result += getResInDir(arr, curr_color, idx1, idx2, )
    for(let step_i = -1; step_i<=1; step_i++)
        for(let step_j = -1; step_j<=1; step_j++)
        if(! (step_i===0 && step_j===0)){
            console.log(getResInDir(arr, curr_color, idx1, idx2, step_i, step_j));
            result += getResInDir(arr, curr_color, idx1, idx2, step_i, step_j);
        }

}


export default class App extends React.Component{

    state = {};

    
    

    constructor(props) {
        super(props);
        this.state.board = new Array(8);
        //const {board} = this.state.board;
        for (let i = 0; i < 8; i++)
            this.state.board[i] = new Array(8);

        for (let i = 0; i < 8; i++)
            for (let j = 0; j < 8; j++) {
                this.state.board[i][j] = {id: String(10 * i + j), status: 'empty'};
            }
            this.state.board[3][3].status='white';
            this.state.board[3][4].status='black';
            this.state.board[4][3].status='black';
            this.state.board[4][4].status='white';
            this.state.board[3][3].score=-1;
            this.state.board[3][4].score=-1;
            this.state.board[4][3].score=-1;
            this.state.board[4][4].score=-1;


        console.log(this.state.board)
    }




    onClickField = (id) => {

            this.setState((state)=>{
                //const {board} = state;
                const idx1 = Math.floor(id/10), idx2=id%10;
                console.log(idx1,'       ',idx2);
                const oldItem = state.board[idx1][idx2];
                let status;

                /*    REPLACE WITH LOGIC BLOCK
                


                if (oldItem.status==='empty')
                    status = 'black';
                else if (oldItem.status==='black')
                    status = 'white';
                else
                    status = 'black';
                

                const status = this.board[i][j].status;




                const newBoard = new Array(8);
                for (let i = 0; i < 8; i++)
                    newBoard[i] = new Array(8);

                for (let i = 0; i < 8; i++)
                    for (let j = 0; j < 8; j++) {
                        if (i===idx1 && j===idx2)
                            newBoard[i][j] = {...oldItem, status};
                        else
                            newBoard[i][j] = state.board[i][j];
                    }

                    */

                   const status = this.board[i][j].status;
                   for (let i = 0; i < 8; i++)
                   for (let j = 0; j < 8; j++) {
                       if(status)
                        newBoard[i][j] = {...oldItem, score: getResInAllDir(this.state.board, "black", i, j)};
                   }

                


                //console.log(newBoard);
                return {board: newBoard};

            });


    }

    render(){

        const {board} = this.state;
        return <PlayingField onClickField={this.onClickField}>{board}</PlayingField>;
    }


}






