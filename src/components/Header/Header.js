// @flow

import React from "react";
import Logo from "~/components/Logo";
import styles from "./Header.module.scss";

export default function Header() {
  return (
    <nav className={styles.header}>
      <ul>
        <li>
          <Logo />
        </li>
        <li className={styles.right}>
          <a>New Game</a>
        </li>
      </ul>
    </nav>
  );
}
