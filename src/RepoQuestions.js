import React, { Component } from 'react'
import './RepoQuestions.css';
import Question from './Question';

class RepoQuestions extends Component{
    render(){
        return(
            <div className='repoQuestion'>
            <Question/>     
            <Question/>
            </div>
            
        );
    }
}

export default RepoQuestions