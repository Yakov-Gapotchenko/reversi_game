import React from 'react';
import './game-cell.css';

export default class GameCell extends React.Component {

    render(){
        const {onClickField,key} = this.props;
        return <div className='game-cell' onClick={onClickField} key={key}></div>;


    }



}