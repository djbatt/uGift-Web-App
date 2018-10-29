import React from 'react'
import { Grid, Segment, Form, Input, Button, Header } from 'semantic-ui-react';

export default function adduser(props) {
  return (
    <Grid centered>
      <Grid.Column widescreen={10} largeScreen={10} computer={12} tablet={12} mobile={16}>
        <Segment.Group size='massive'>
          <Segment inverted color='blue'>
                  <Header>Add User</Header>
          </Segment>
          <Segment>

            <Form>
              <Form.Group>
                <Form.Input required 
                label='Username' 
                width={16} 
                onChange={props.handlechange}
                name='username'
                value={props.userName}/>
              </Form.Group>
              <Form.Group>
                <Form.Input required 
                label='Password' 
                width={16} 
                onChange={props.handlechange}
                name='password'
                value={props.passWord}/>
              </Form.Group>
              <br/>
              <Form.Group>
                <Form.Field>
                  <Button circular icon='plus' color='blue' content='Submit' onClick={props.addUser}/>
                  </Form.Field>
              </Form.Group>
            </Form>
          </Segment>

        </Segment.Group>

      </Grid.Column>
    </Grid>
  )
}
