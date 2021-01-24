import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';


import PlayingField from '../playing-field';



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
                this.state.board[i][j] = {id: String(10 * i + j), status: 'black'};
            }
        console.log(this.state.board)
    }




    onClickField = (id) => {

            this.setState((state)=>{
                //const {board} = state;
                const idx1 = Math.floor(id/10), idx2=id%10;
                console.log(idx1,'       ',idx2);
                const oldItem = state.board[idx1][idx2];
                let status;
                if (oldItem.status==='empty')
                    status = 'black';
                else if (oldItem.status==='black')
                    status = 'white';
                else
                    status = 'black';




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

                console.log(newBoard);
                return {board: newBoard};

            });


    }

    render(){

        const {board} = this.state;
        return <PlayingField onClickField={this.onClickField}>{board}</PlayingField>;
    }


}






