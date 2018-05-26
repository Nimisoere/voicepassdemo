import React from "react";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import { AnimatedSwitch } from "react-router-transition";
import { history, animations } from "../../_helpers";

import { seoObject } from "../../_constants";
import { Header } from "../Header";
import {HomePage} from "../HomePage";
import {CreateProfile} from "../CreateProfile";
import {Enroll} from "../Enroll";
import {EnrollStatus} from "../EnrollStatus";
import {Transaction} from "../Verify";
import { VerifyTransaction } from "../VerifyTransaction";
import { ResetProfile } from "../Reset";
import {DeleteProfile} from "../DeleteProfile";
import {NotFound, Seo} from "../_Shared";

export const App = ({ user, loggedIn }) => (
  <Router history={history}>
    <div className="App">
      <Seo
        title={seoObject.base.title}
        description={seoObject.base.description}
        base={true}
      />
      <Header />
      <main>
      <AnimatedSwitch
           atEnter={animations.slideInTranstion.atEnter}
           atLeave={animations.slideInTranstion.atLeave}
           atActive={animations.slideInTranstion.atActive}
           mapStyles={animations.mapStylesSlide}
           className='switch-wrapper'
          >
          
          <Route exact path="/" component={HomePage} />
          <Route path="/create-profile" component={CreateProfile} />
          <Route path="/enroll-profile" component={Enroll} />
          <Route path="/enrollment-status" component={EnrollStatus} />
          <Route path="/perform-transaction" component={Transaction} />
          <Route path="/verify-transaction" component={VerifyTransaction} />
          <Route path="/reset-profile" component={ResetProfile} />
          <Route path="/delete-profile" component={DeleteProfile} />
          <Route path="/404-not-found" component={NotFound} />
          <Redirect to="/404-not-found" /> 
        </AnimatedSwitch> 
      </main>
    </div>
  </Router>
);

