import React from 'react';
import ReactDOM from 'react-dom';

import PlayingField from './components/playing-field';


const board123 = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];



const board = new Array(new Array(8));






ReactDOM.render(<PlayingField>{board}</PlayingField>,document.getElementById('root'));






