import React, { Component } from 'react'
import './Repo.css';
import RepoQuestions from './RepoQuestions';
import Nav from './Nav';

class Repo extends Component{
   
    render(){
        return(
            <div>
            <Nav active={this.props.active}/>
                <div className='repo'>            
                <h1>Answerd</h1>
                <RepoQuestions/>
                <h1>without Answerd</h1>
                <RepoQuestions/>
                </div>
            </div>

        );
    }
}

export default Repo