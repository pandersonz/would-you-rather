import React, { Component } from 'react'
import './Repo.css';
import RepoQuestions from './RepoQuestions';

class Repo extends Component{
    render(){
        return(
            <div class='repo'>
            <RepoQuestions/>
            <RepoQuestions/>
            </div>

        );
    }
}

export default Repo