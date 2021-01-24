import React from 'react';
import ReactDOM from 'react-dom';

import './playing-field.css';
import GameCell from "../game-cell";

export default class PlayingField extends React.Component {
    render() {
        const {onClickField} = this.props;
        const cells = this.props.children;

        //console.log(cells.flat());
        const res = cells.flat().map((cell)=>{
            return (<GameCell key={cell.id} onClickField={onClickField}>{cell}</GameCell>);
        });

        return <div className='playing-field'>{res}</div>;
    }
}



