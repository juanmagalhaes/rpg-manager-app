// @flow

import React from "react";
import { withRouter } from "react-router-dom";
import { CharacterList } from "~/components/CharacterManager";
import Sumary from "./Sumary";
import styles from "./Game.module.scss";
import Header from "./Header";
import type { GameProps as Props } from "./types";

function Game({ gameId, gameName, gameSumary, characters, history }: Props) {
  return characters.length ? (
    <section className={styles.game}>
      <Header gameId={gameId} gameName={gameName} />
      <CharacterList scrollable gameId={gameId} characters={characters} />
    </section>
  ) : (
    <section className={styles.sumaryContainer}>
      <Header gameId={gameId} gameName={gameName} />
      <Sumary gameId={gameId} text={gameSumary} />
    </section>
  );
}

export default withRouter(Game);
