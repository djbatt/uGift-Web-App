import React, { Component } from 'react'
import AddUser from '../../../layout/dashboard/content/addUser/adduser';
import API from '../../../util/API';

export default class addUserContainer extends Component {

    state = {
        username: '',
        password: ''
    }
    
    addUser = async() => {
        try {
            const addResponse = await API.addUser(this.state);
            console.log(addResponse.data);
        } catch (e) {
            console.log('Add user error', e);
        }
    }

    handleChange = (e, { name, value }) => this.setState({ [name]: value })

  render() {

    return (
        <AddUser handlechange={this.handleChange} userName={this.state.username} passWord={this.state.password} addUser={this.addUser}>
        </AddUser>
    )
  }
}