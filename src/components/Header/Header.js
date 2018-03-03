// @flow

import React from "react";
import { Link, withRouter } from "react-router-dom";
import BackIcon from "material-ui/svg-icons/navigation/arrow-back";
import IconButton from "material-ui/IconButton";
import { TEXT_ICONS, TRANSPARENT1 } from "~/styles/constants";
import Logo from "~/components/Logo";
import styles from "./Header.module.scss";
import type { RouterInjectedProps } from "~/types/router";

export function Header({ history, location }: RouterInjectedProps) {
  const { pathname } = location;
  let header = "Dashboard";
  if (pathname.includes("game") && !pathname.includes("character")) {
    header = "Game";
  }
  if (pathname.includes("character")) {
    header = "Character";
  }
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
      <header className={styles.subHeaderContainer}>
        {!location.pathname.includes("dashboard") && (
          <IconButton
            hoveredStyle={{ background: TRANSPARENT1 }}
            onClick={() => history.goBack()}
          >
            <BackIcon color={TEXT_ICONS} />
          </IconButton>
        )}
        <h1 className={styles.subHeader}>{header}</h1>
      </header>
    </nav>
  );
}

export default withRouter(Header);
