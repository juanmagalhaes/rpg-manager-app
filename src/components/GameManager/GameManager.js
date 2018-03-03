// @flow

import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import DeleteIcon from "material-ui/svg-icons/action/delete";
import IconButton from "material-ui/IconButton";
import GameForm from "./GameForm";
import {
  changeGame,
  getGame,
  saveGame,
  updateGame,
  newGame,
  deleteGame
} from "./actions";
import styles from "./GameManager.module.scss";
import { TEXT_ICONS, TRANSPARENT1 } from "~/styles/constants";
import type { GameManagerProps as Props } from "./types";

export class GameManager extends Component<Props, { tab: string }> {
  unlisten: Function;

  componentWillUnmount() {
    if (this.unlisten) {
      this.unlisten();
    }
  }

  componentDidMount() {
    const { match, getGame } = this.props;
    if (match.params.gameId) {
      getGame(match.params.gameId);
    }

    this.unlisten = this.props.history.listen(_ => {
      this.props.newGame();
    });
  }

  render() {
    const { match, ...rest } = this.props;
    const { params } = match;
    const { gameId } = params;

    return (
      <div className={styles.gameManager}>
        <section className={styles.placeholder}>
          <div className={styles.form}>
            <header className={styles.header}>
              <h3>{gameId ? "EDIT CAMPAIGN" : "NEW CAMPAIGN"}</h3>
              {gameId && (
                <IconButton
                  hoveredStyle={{ background: TRANSPARENT1 }}
                  tooltip="Delete this campaign"
                  onClick={() => {
                    rest.deleteGame(gameId);
                  }}
                >
                  <DeleteIcon color={TEXT_ICONS} />
                </IconButton>
              )}
            </header>
            <GameForm
              {...rest.game}
              id={gameId}
              onChange={rest.changeGame}
              onSubmit={gameId ? rest.updateGame : rest.saveGame}
            />
          </div>
        </section>
      </div>
    );
  }
}

function selector({ gameManager }) {
  return { ...gameManager };
}

function dispatcher(dispatch) {
  return bindActionCreators(
    {
      newGame,
      getGame,
      saveGame,
      changeGame,
      deleteGame,
      updateGame
    },
    dispatch
  );
}

export default connect(selector, dispatcher)(GameManager);
