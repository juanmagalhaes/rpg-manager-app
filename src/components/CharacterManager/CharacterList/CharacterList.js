// @flow

import React from "react";
import Scrollable from "~/components/Scrollable";
import Character from "../Character";
import type { Props } from "./types";
import styles from "./CharacterList.module.scss";

export default function CharacterList({
  characters,
  scrollable,
  gameId
}: Props) {
  return (
    <Scrollable shouldScroll={scrollable}>
      <ul className={styles.characterList}>
        {characters.map(character => (
          <li key={character.id}>
            <Character gameId={gameId} {...character} />
          </li>
        ))}
      </ul>
    </Scrollable>
  );
}
