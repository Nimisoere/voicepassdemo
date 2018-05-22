import React from "react";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import { history } from "../../_helpers";

//import { Seo } from "../Shared";
//import { seoObject } from "../../_constants";

import { Header } from "../Header";
import {HomePage} from "../HomePage";
import {CreateProfile} from "../CreateProfile";
import {Enroll} from "../Enroll";
import {EnrollStatus} from "../EnrollStatus";

/* import {Confirmation} from "../Confirmation";

import {DeleteProfile} from "../DeleteProfile";


import {Reset} from "../Reset";
import {Verify} from "../Verify";
import {VerifyStatus} from "../VerifyStatus";
import {NotFound} from "../_Shared"; */

export const App = ({ user, loggedIn }) => (
  <Router history={history}>
    <div className="App">
      {/*  <Seo
        title={seoObject.base.title}
        description={seoObject.base.description}
        base={true}
      /> */}
      <Header />
      <main>
         <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/create-profile" component={CreateProfile} />
          <Route path="/enroll-profile" component={Enroll} />
          <Route path="/enrollment-status" component={EnrollStatus} />
          {/* <Route path="/confirmation" component={Confirmation} />
          
          
          
          <Route path="/verify-profile" component={Verify} />
          <Route path="/verify-status" component={VerifyStatus} />
          <Route path="/delete-profile" component={DeleteProfile} />
          <Route path="/reset-status" component={Reset} />
          <Route path="/404-not-found" component={NotFound} />
          <Redirect to="/404-not-found" /> */}
        </Switch> 
      </main>
    </div>
  </Router>
);

