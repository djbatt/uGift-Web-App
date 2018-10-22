import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './dashboard.css';

import { Grid, Responsive } from 'semantic-ui-react';

import WideNav from '../../layout/dashboard/wideNav/wideNav';
import NotFound from '../404/404';

import Lipsum from '../../layout/dashboard/lipsum';

import VerifyGift from '../../layout/dashboard/content/verifyGift/verifygift';
import AddBusiness from '../../layout/dashboard/content/addBusiness/addbusiness';

export default function dashboard(props) {
  return (
    <Grid className='dashboardContainer' padded>
      <Responsive className='navCol' minWidth={992} as={Grid.Column} widescreen={2} largeScreen={3} computer={3}>
        <WideNav path={props.location.pathname}/>
      </Responsive>
      <Grid.Column className='contentCol' widescreen={14} largeScreen={13} computer={13} tablet={16} mobile={16}>
        <Switch>
          <Route path='/dashboard' exact={true} component={Lipsum}/>
          <Route path='/dashboard/services' exact={true} component={Lipsum} />
          <Route path='/dashboard/gifts/verify' exact={true} component={VerifyGift} />
          <Route path='/dashboard/business/add' exact={true} component={AddBusiness} />
          <Route component={NotFound} />

        </Switch>
      </Grid.Column>
    </Grid>
  )
}
