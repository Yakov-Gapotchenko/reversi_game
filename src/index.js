import React from 'react';
import ReactDOM from 'react-dom';

import PlayingField from './components/playing-field';


const board123 = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];



const board = new Array(new Array(8));



const onFieldClick = (id) => {console.log(id);}


ReactDOM.render(<PlayingField onClick={onFieldClick}></PlayingField>,document.getElementById('root'));






