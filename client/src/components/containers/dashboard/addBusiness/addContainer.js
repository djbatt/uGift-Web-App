import React, { Component } from 'react'
import AddBusiness from '../../../layout/dashboard/content/addBusiness/addbusiness';
import API from '../../../util/API';
import { connect } from "react-redux";
import { businessToStore } from '../../../util/actions/index';

const mapDispatchToProps = (dispatch) => {
    return {
        businessToStore: business => dispatch(businessToStore(business))
    }
}

class addContainer extends Component {

    state = {
        businessName: ''
    }
    

    addBusiness = async() => {
        try {
            const addResponse = await API.addBusiness(this.state)
            console.log(addResponse.data);
            const title = addResponse.data.businessName;
            const id = addResponse.data._id;

            this.props.businessToStore({ title, id})
            this.setState({
                businessName: ''
            })
        } catch (e) {
            console.log('Add Business Error', e);
        }
    }

    handleChange = (e, { name, value }) => this.setState({ [name]: value })

  render() {

    return (
        <AddBusiness addbusiness={this.addBusiness} handlechange={this.handleChange} businessName={this.state.businessName}>
        </AddBusiness>
    )
  }
}

export default connect(null, mapDispatchToProps)(addContainer)