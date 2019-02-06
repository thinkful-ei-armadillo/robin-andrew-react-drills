import React from 'react';
import ReactDOM from 'react-dom';
import HelloWorld from './state/HelloWorld';
import Bomb from './state/Bomb';
import Roulette from './state/Roulette'
import Accordion from './state/Accordion';
import sections from './state/STORE';


ReactDOM.render(<Accordion sections = {sections}/>, document.getElementById('root'));


