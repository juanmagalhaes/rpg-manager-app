// @flow

import React from "react";
import Dotdotdot from "react-dotdotdot";
import styles from "./Game.module.scss";
import type { SumaryProps as Props } from "./types";

export default function Suamry({ text }: Props) {
  return (
    <div className={styles.sumaryPlaceholder}>
      <div className={styles.sumary}>
        <Dotdotdot clamp={8}>{text}</Dotdotdot>
      </div>
    </div>
  );
}
