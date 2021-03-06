import React from "react";
import { Router, Route, Redirect } from "react-router-dom";
import { AnimatedSwitch } from "react-router-transition";
import { history, animations } from "../../_helpers";
import {PrivateRoute} from "../_Routes";
import { seoObject } from "../../_constants";
import { Header } from "../Header";
import { HomePage } from "../HomePage";
/* import { CreateProfile } from "../CreateProfile"; */
import { Enroll, EnrollVoice } from "../Enroll";
/* import { EnrollStatus } from "../EnrollStatus"; */
import { Transaction } from "../Verify";
import { VerifyStatus } from "../Verify";
/*import { ResetProfile } from "../Reset";
import { DeleteProfile } from "../DeleteProfile"; */
import { NotFound, Seo } from "../_Shared";
import { AccountDisplay } from "../AccountDisplay";

export const App = ({ user, loggedIn }) => (
  <Router history={history} basename={process.env.PUBLIC_URL}>
    <div className="App">
      <Seo
        title={seoObject.base.title}
        description={seoObject.base.description}
        base={true}
      />
      <Header />
      <AccountDisplay />
      <main>
        <AnimatedSwitch
          atEnter={animations.slideInTranstion.atEnter}
          atLeave={animations.slideInTranstion.atLeave}
          atActive={animations.slideInTranstion.atActive}
          mapStyles={animations.mapStylesSlide}
          className="switch-wrapper"
        >
          <Route exact path="/" component={HomePage} />
          {/* <Route path="/create-profile" component={CreateProfile} /> */}
          <Route path="/enroll-profile" component={Enroll} />
          {/* <Route path="/enrollment-status" component={EnrollStatus} /> */}
          <PrivateRoute path="/perform-transaction" component={Transaction} />
          {/*  <Route path="/verify-transaction" component={VerifyTransaction} />
          <Route path="/reset-profile" component={ResetProfile} />
          <Route path="/delete-profile" component={DeleteProfile} /> */}
          <Route path="/enroll-voice" component={EnrollVoice} />
          <Route path="/verification-status" component={VerifyStatus} />
          <Route path="/404-not-found" component={NotFound} />
          <Redirect to="/404-not-found" />
        </AnimatedSwitch>
      </main>
    </div>
  </Router>
);
