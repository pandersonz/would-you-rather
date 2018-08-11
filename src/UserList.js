import React, { Component } from 'react'
import './UserList.css';

class ListUser extends Component{
    state={
        userName:'',
        imgName:''
    }
    render(){
        return(
            <div>
                <div className='listUser'>
                    <div onClick={}>Usuario1</div>
                    <div onClick={}>Usuario2</div>
                    <div onClick={}>Usuario3</div>
                </div>
            </div>

        );
    }
}

export default ListUser