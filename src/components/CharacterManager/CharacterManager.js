// @flow

import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  saveCharacter,
  changeCharacter,
  updateCharacter,
  getCharacter,
  deleteCharacter,
  newCharacter
} from "./actions";
import CharacterForm from "./CharacterForm";
import styles from "./CharacterManager.module.scss";
import type { RouterInjectedProps } from "~/types/router";
import type { Character } from "./Character";

type Props = RouterInjectedProps & {
  getCharacter: Function,
  newCharacter: Function,
  character: Character,
  saveCharacter: Function,
  updateCharacter: Function,
  changeCharacter: Function
};

export class CharacterManager extends Component<Props, { tab: string }> {
  unlisten: Function;

  componentDidMount() {
    const { character, match } = this.props;
    if (!character.id && match.params.characterId) {
      this.props.getCharacter(match.params.characterId);
    }

    this.unlisten = this.props.history.listen(_ => {
      this.props.newCharacter();
    });
  }

  componentWillUnmount() {
    if (this.unlisten) {
      this.unlisten();
    }
  }

  render() {
    const {
      character,
      saveCharacter,
      updateCharacter,
      changeCharacter
    } = this.props;
    const { gameId, characterId } = this.props.match.params;
    if (gameId) character.gameId = gameId;
    return (
      <section className={styles.characterManager}>
        <div className={styles.formContainer}>
          <CharacterForm
            character={character}
            onDelete={deleteCharacter}
            onChange={changeCharacter}
            onSubmit={characterId ? updateCharacter : saveCharacter}
          />
        </div>
      </section>
    );
  }
}

function selector({ characterManager, dashboard }, { match }) {
  return {
    ...characterManager,
    game:
      dashboard.charactersByGame.find(
        ({ gameId }) => gameId === parseInt(match.params.gameId, 10)
      ) || {}
  };
}

function dispatcher(dispatch) {
  return bindActionCreators(
    {
      newCharacter,
      getCharacter,
      saveCharacter,
      updateCharacter,
      changeCharacter,
      deleteCharacter
    },
    dispatch
  );
}

export default connect(selector, dispatcher)(CharacterManager);
