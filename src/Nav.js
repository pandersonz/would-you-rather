import React, { Component } from 'react'
import './Nav.css';

class Nav extends Component{
    state={
        userName:'',
        imgUser:''
    }
    render(){
        return(
            <div className='nav'>
            <div className='navVoid'></div>
            <p>user</p>
            </div>

        );
    }
}

export default Nav