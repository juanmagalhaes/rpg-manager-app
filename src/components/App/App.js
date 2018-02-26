// @flow

import React from "react";
import Header from "~/components/Header";
import Main from "~/components/Main";
import styles from "./App.module.scss";

export default function App() {
  return (
    <div className={styles.app}>
      <Header />
      <Main />
    </div>
  );
}
