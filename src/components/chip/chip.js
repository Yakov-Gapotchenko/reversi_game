import React from 'react';
import ReactDOM from 'react-dom';
import './chip.css';

export default class Chip extends React.Component{


    render(){
        const cell = this.props.children;
        const classes = `chip ${cell.status}`;
        return <div className={classes}></div>;


    };




}










