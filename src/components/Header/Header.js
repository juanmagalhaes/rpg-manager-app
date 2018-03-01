// @flow

import React from "react";
import { Link } from "react-router-dom";
import Logo from "~/components/Logo";
import styles from "./Header.module.scss";

export default function Header() {
  return (
    <nav className={styles.header}>
      <ul>
        <li className={styles.logo}>
          <Logo />
        </li>
        <li className={styles.right}>
          <Link className={styles.logo} to="/game">
            New Game
          </Link>
        </li>
      </ul>
    </nav>
  );
}
