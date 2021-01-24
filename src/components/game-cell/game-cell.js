import React from 'react';
import './game-cell.css';
import Chip from "../chip";
import '../chip/chip.css';

export default class GameCell extends React.Component {

    state = {chipStatus: 'empty'};
    render(){
        const {onClickField,key} = this.props;
        const cell = this.props.children;


        return (
            <div className='game-cell' onClick={()=>onClickField(cell.id)} key={key}>
                <Chip>{cell}</Chip>
            </div>
        );


    }



}