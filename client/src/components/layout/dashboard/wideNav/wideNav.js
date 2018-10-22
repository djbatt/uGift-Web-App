import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Menu, Icon } from 'semantic-ui-react';

export default class wideNav extends Component {
    state = {
        activeItem: null
    }

    componentDidMount = () => {
        switch (this.props.path) {
            case '/dashboard/gifts/verify':
            case '/dashboard/gifts/statistics':
            this.setState({
                activeItem: 'gifts'
            })
            break;
            case '/dashboard/services/edit':
            case '/dashboard/services/add':
            case '/dashboard/services/delete':
            this.setState({
                activeItem: 'services'
            })
            break;
            case '/dashboard/business/select':
            case '/dashboard/business/edit':
            case '/dashboard/business/add':
            case '/dashboard/business/delete':
            this.setState({
                activeItem: 'business'
            })
            break;
            case '/dashboard/faq':
            case '/dashboard/support':
            this.setState({
                activeItem: 'help'
            })
            break;
            default:
            this.setState({
                activeItem: null
            })
            break;
        }
      console.log(this.props.path)
    }

    componentDidUpdate(prevProps, prevState) {
        console.log(this.props.path)
        
    }
    
    

    handleItemClick = (e, { name }) => this.setState({ activeItem: name }, () => {
        console.log(this.state);
    })

    render() {

        const ifGifts = this.state.activeItem === 'gifts' ? (
            <Menu.Menu>
                <Menu.Item as={Link} to='/dashboard/gifts/verify'>
                    Verify
                    <Icon name='check' />
                </Menu.Item>
                <Menu.Item as={Link} to='/dashboard/gifts/statistics'>
                    Statistics
                    <Icon name='chart line' />
                </Menu.Item>
            </Menu.Menu>
        ): (
            <div/>
        )

        const ifServices = this.state.activeItem === 'services' ? (
            <Menu.Menu>
                <Menu.Item as={Link} to='/dashboard/services/edit'>
                    Edit
                    <Icon name='edit' />
                </Menu.Item>
                <Menu.Item as={Link} to='/dashboard/services/add'>
                    Add
                    <Icon name='cut' />
                </Menu.Item>
                <Menu.Item as={Link} to='/dashboard/services/delete'>
                    Delete
                    <Icon name='delete' />
                </Menu.Item>
            </Menu.Menu>
        ): (
            <div/>
        )

        const ifBusiness = this.state.activeItem === 'business' ? (
            <Menu.Menu>
                <Menu.Item as={Link} to='/dashboard/business/select'>
                    Select
                    <Icon name='numbered list' />
                </Menu.Item>
                <Menu.Item as={Link} to='/dashboard/business/edit'>
                    Edit
                    <Icon name='configure' />
                </Menu.Item>
                <Menu.Item as={Link} to='/dashboard/business/add'>
                    Add
                    <Icon name='database' />
                </Menu.Item>
                <Menu.Item as={Link} to='/dashboard/business/delete'>
                    Delete
                    <Icon name='delete' />
                </Menu.Item>
            </Menu.Menu>
        ): (
            <div/>
        )

        const ifHelp = this.state.activeItem === 'help' ? (
            <Menu.Menu>
                <Menu.Item as={Link} to='/dashboard/faq'>
                    FAQ
                    <Icon name='question circle' />
                </Menu.Item>
                <Menu.Item as={Link} to='/dashboard/support'>
                    Support
                    <Icon name='mail' />
                </Menu.Item>
            </Menu.Menu>
        ): (
            <div/>
        )

        return (
            <Menu secondary vertical fluid size='massive'>

                <Menu.Item as={Link} to='/dashboard'>
                    Dashboard
                        <Icon name='book' />
                </Menu.Item>

                <Menu.Item
                    onClick={this.handleItemClick}
                    name='gifts'
                    active={this.state.activeItem === 'gifts'}>
                    Gifts
                        <Icon name='caret down' />
                </Menu.Item>
                {ifGifts}

                <Menu.Item
                    onClick={this.handleItemClick}
                    name='services'
                    active={this.state.activeItem === 'services'}>
                    Services
                    <Icon name='caret down' />
                </Menu.Item>
                {ifServices}

                <Menu.Item
                    onClick={this.handleItemClick}
                    name='business'
                    active={this.state.activeItem === 'business'}>
                    Business
                        <Icon name='caret down' />
                </Menu.Item>
                {ifBusiness}

                <Menu.Item
                    onClick={this.handleItemClick}
                    name='help'
                    active={this.state.activeItem === 'help'}>
                    Help
                        <Icon name='caret down' />
                </Menu.Item>
                {ifHelp}
            </Menu>
        )
    }
}
