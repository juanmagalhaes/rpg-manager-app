// @flow

import React from "react";
import CharacterList from "~/components/CharacterList";
import styles from "./Game.module.scss";
import Header from "./Header";
import type { Props } from "./types";

export default function Game({ gameId, gameName, characters }: Props) {
  return (
    <section className={styles.game}>
      <Header gameId={gameId} gameName={gameName} />
      <CharacterList characters={characters} />
    </section>
  );
}
