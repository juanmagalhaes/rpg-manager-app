// @flow

import React from "react";
import { Link } from "react-router-dom";
import styles from "./Game.module.scss";
import type { HeaderProps as Props } from "./types";

export default function Header({ gameId, gameName }: Props) {
  return (
    <Link to={`/game/${gameId}`} className={styles.link}>
      <header className={styles.header}>
        <h3>{gameName}</h3>
      </header>
    </Link>
  );
}
