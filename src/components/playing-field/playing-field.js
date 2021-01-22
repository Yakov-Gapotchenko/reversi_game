import React from 'react';
import ReactDOM from 'react-dom';
import Row from "../row";
import './playing-field.css';

export default class PlayingField extends React.Component {
    render() {
        const rows = this.props.children;
        const res = rows.map((row)=>{
            return <Row>{row}</Row>;
        })

        return <div className='playing-field'>{res}</div>;
    }
}



