// @flow

import React from "react";
import { Switch, Redirect, Route } from "react-router-dom";
import Dashboard from "~/components/Dashboard";
import styles from "./Main.module.scss";

export default function Main() {
  return (
    <div className={styles.main}>
      <Switch>
        <Route path="/dashboard" exact component={Dashboard} />
        <Redirect from="/" to="/dashboard" />
      </Switch>
    </div>
  );
}
