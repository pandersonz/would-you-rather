import React, { Component } from 'react';
import './Question.css';
import Answerd from './Answerd';

class Question extends Component{
    render(){
        return(
            <div className='question'>
            <h2>Pregunta 1</h2>
            <Answerd/>
            <Answerd/>
            </div>
        );
    }
}

export default Question