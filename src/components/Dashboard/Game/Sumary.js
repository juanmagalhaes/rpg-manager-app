// @flow

import React from "react";
import { Link } from "react-router-dom";
import Dotdotdot from "react-dotdotdot";
import styles from "./Game.module.scss";
import type { SumaryProps as Props } from "./types";

export default function Suamry({ gameId, text }: Props) {
  return (
    <div className={styles.sumaryPlaceholder}>
      <h4>
        This Campaign has no characters yet. Why not{" "}
        <Link to={`/game/${gameId}/character`}>add some?</Link>
      </h4>
      <div className={styles.sumary}>
        <Dotdotdot clamp={8}>{text}</Dotdotdot>
      </div>
    </div>
  );
}
