// @flow

import React from "react";
import { Scrollbars } from "react-custom-scrollbars";
import Character from "~/components/Character";
import type { Props } from "./types";
import styles from "./CharacterList.module.scss";

export default function CharacterList({ characters }: Props) {
  return (
    <Scrollbars autoHide>
      <ul className={styles.characterList}>
        {characters.map(character => (
          <li key={character.id}>
            <Character {...character} />
          </li>
        ))}
      </ul>
    </Scrollbars>
  );
}
