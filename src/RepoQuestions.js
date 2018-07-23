import React, { Component } from 'react'
import Question from './Question';

class RepoQuestions extends Component{
    render(){
        return(
            <div class='repoQuestion'>
            <h1>Answerd</h1>
            <Question/>     
            <Question/>
            </div>
        );
    }
}

export default RepoQuestions