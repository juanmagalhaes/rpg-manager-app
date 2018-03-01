// @flow

import React from "react";
import { withRouter } from "react-router-dom";
import RaisedButton from "material-ui/RaisedButton";
import CharacterList from "~/components/Dashboard/CharacterList";
import Sumary from "./Sumary";
import styles from "./Game.module.scss";
import Header from "./Header";
import type { GameProps as Props } from "./types";
import { COLOR6, COLOR4 } from "~/styles/constants";

function Game({ gameId, gameName, gameSumary, characters, history }: Props) {
  const addCharacters = () => history.push("/character");
  return characters.length ? (
    <section className={styles.game}>
      <Header gameId={gameId} gameName={gameName} />
      <CharacterList characters={characters} />
      <RaisedButton
        fullWidth
        labelColor={COLOR4}
        onClick={addCharacters}
        backgroundColor={COLOR6}
        label="Add More Characters"
      />
    </section>
  ) : (
    <section className={styles.sumaryContainer}>
      <Header gameId={gameId} gameName={gameName} />
      <Sumary text={gameSumary} />
      <RaisedButton
        fullWidth
        labelColor={COLOR4}
        label="Add Characters"
        onClick={addCharacters}
        backgroundColor={COLOR6}
      />
    </section>
  );
}

export default withRouter(Game);
