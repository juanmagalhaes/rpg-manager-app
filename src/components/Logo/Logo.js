// @flow

import React from "react";
import { Link } from "react-router-dom";
import styles from "./Logo.module.scss";
import diceLogo from "~/assets/dice-logo.png";

export default function Logo() {
  return (
    <Link className={styles.logo} to="/">
      <img src={diceLogo} alt="Dice Logo" styles={{ marginRigth: "8px" }} />
      <strong>RPG Manager</strong>
    </Link>
  );
}
