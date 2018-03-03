// @flow

import React from "react";
import { withRouter } from "react-router-dom";
import { TRANSPARENT1 } from "~/styles/constants";
import IconButton from "material-ui/IconButton";
import EditIcon from "material-ui/svg-icons/editor/mode-edit";
import AddPersonIcon from "material-ui/svg-icons/social/person-add";
import styles from "./Game.module.scss";
import type { HeaderProps as Props } from "./types";

export function Header({ gameId, gameName, history }: Props) {
  return (
    <header className={styles.header}>
      <h3>{gameName}</h3>
      <div>
        <IconButton
          hoveredStyle={{ background: TRANSPARENT1 }}
          tooltipPosition="top-left"
          tooltip="Add a character to this campaign"
          onClick={() => history.push(`/game/${gameId}/character`)}
        >
          <AddPersonIcon color="white" />
        </IconButton>
        <IconButton
          hoveredStyle={{ background: TRANSPARENT1 }}
          tooltipPosition="top-left"
          tooltip="Edit this campaign"
          onClick={() => history.push(`/game/${gameId}`)}
        >
          <EditIcon color="white" />
        </IconButton>
      </div>
    </header>
  );
}

export default withRouter(Header);
