// @flow

import React from "react";
import Avatar from "./Avatar";
import { Link } from "react-router-dom";
import type { Character as Props } from "./types";
import styles from "./Character.module.scss";
import screen from "~/styles/screen.module.scss";
import mana from "~/assets/mana2.png";
import health from "~/assets/health2.png";

export default function Character(props: Props) {
  return (
    <Link
      className={styles.card}
      to={`/game/${props.gameId}/character/${props.id}`}
    >
      <section className={styles.character}>
        <Avatar src={props.avatar} />
        <div className={styles.status}>
          <p className={styles.right}>
            <strong>Player</strong>: {props.player}
          </p>
          <p>
            <strong>{props.name}</strong>
          </p>
          <p>
            {props.characterClass}, Lv: {props.level}
          </p>
          <p>
            {props.race}, {props.age} years old
          </p>
          <p className={screen.hideOnSmall}>
            <img alt="Health Points" src={health} />
            <span>{props.healthPoints}</span>
            <img alt="Magic Points" src={mana} />
            <span>{props.magicPoints}</span>
          </p>
        </div>
      </section>
    </Link>
  );
}
