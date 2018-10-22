import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './dashboard.css';

import { Grid } from 'semantic-ui-react';

import WideNav from '../../layout/dashboard/wideNav/wideNav';
import NotFound from '../404/404';

import Lipsum from '../../layout/dashboard/lipsum';

import VerifyGift from '../../layout/dashboard/content/verifyGift/verifygift';
import AddBusiness from '../../layout/dashboard/content/addBusiness/addbusiness';

export default function dashboard(props) {
  return (
    <Grid className='dashboardContainer' padded>
      <Grid.Column className='navCol' width={2}>
        <WideNav path={props.location.pathname}/>
      </Grid.Column>
      <Grid.Column className='contentCol' width={14}>
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
