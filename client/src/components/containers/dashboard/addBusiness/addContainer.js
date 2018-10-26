import React, { Component } from 'react'
import AddBusiness from '../../../layout/dashboard/content/addBusiness/addbusiness';
import API from '../../../util/API';
import { connect } from 'react-redux';

export default class addContainer extends Component {

    state = {
        businessName: ''
    }

    componentDidMount = () => {
    }
    

    addBusiness = async() => {
        try {
            const addResponse = await API.addBusiness(this.state)
            console.log(addResponse.data);
        } catch (e) {
            console.log('Add Business Error', e);
        }
    }

    handleChange = (e, { name, value }) => this.setState({ [name]: value }, () => {
        console.log(this.state);
    })

  render() {

    return (
        <AddBusiness addbusiness={this.addBusiness} handlechange={this.handleChange} businessName={this.state.businessName}></AddBusiness>
    )
  }
}
