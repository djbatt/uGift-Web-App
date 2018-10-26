import React from 'react'
import { Grid, Segment, Form, Input, Button, Header } from 'semantic-ui-react';

// Name of Business
// Street Address
// Postal Code
// City
// State

// Then once that is saved take you to

// First Name
// Last Name
// Email
// Work
// Cell Phone
export default function addbusiness(props) {
  return (
    <Grid centered>
      <Grid.Column widescreen={10} largeScreen={10} computer={12} tablet={12} mobile={16}>
        <Segment.Group size='massive'>
          <Segment inverted color='blue'>
                  <Header>Add Business</Header>
          </Segment>
          <Segment>

            <Form>
              <Form.Group>
                <Form.Input required 
                label='Name of Business' 
                width={16} 
                onChange={props.handlechange}
                name='businessName'
                value={props.businessName}/>
              </Form.Group>
              <br/>
              <Form.Group>
                <Form.Field>
                  <Button circular icon='plus' color='blue' content='Submit' onClick={props.addbusiness}/>
                  </Form.Field>
              </Form.Group>
            </Form>
          </Segment>

        </Segment.Group>

      </Grid.Column>
    </Grid>
  )
}
