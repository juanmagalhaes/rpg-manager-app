// @flow

import React from "react";
import styles from "./Game.module.scss";
import type { HeaderProps as Props } from "./types";

export default function Header({ gameId, gameName }: Props) {
  return (
    <header className={styles.header}>
      <h3>{gameName}</h3>
    </header>
  );
}
