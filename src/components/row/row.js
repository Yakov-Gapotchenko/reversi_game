import React from 'react';
import './row.css';
import GameCell from "../game-cell";



export default class Row extends React.Component {
    render() {
        const {onFieldClick,...props} = this.props;
        const cells = this.props.children;
        const row = cells.map((cell) => {
            return <GameCell>{cell}</GameCell>;

        });


        return (<div className='row'> {row} </div>);

    }
}


