import React from 'react';
import './row.css';
import GameCell from "../game-cell";



export default class Row extends React.Component {
    render() {
        const cells = this.props.children;
        const row = cells.map((cell) => {
            return <GameCell>{cell}</GameCell>;

        });


        return (<div class='row'> {row} </div>);

    }
}


