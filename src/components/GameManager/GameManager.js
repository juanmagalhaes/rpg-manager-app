// @flow

import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import ContentDelete from "material-ui/svg-icons/action/delete";
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
import { TRANSPARENT1 } from "~/styles/constants";
import styles from "./GameManager.module.scss";
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
    if (match.params.id) {
      getGame(match.params.id);
    }

    this.unlisten = this.props.history.listen(_ => {
      this.props.newGame();
    });
  }

  render() {
    const { match, ...rest } = this.props;
    const { params } = match;
    const { id } = params;

    return (
      <div className={styles.gameManager}>
        <section className={styles.placeholder}>
          <div className={styles.form}>
            <header className={styles.header}>
              <h4>{id ? "EDIT CAMPAIGN" : "NEW CAMPAIGN"}</h4>
              {id && (
                <IconButton
                  hoveredStyle={{ background: TRANSPARENT1 }}
                  tooltip="Delete this campaign"
                  onClick={() => {
                    rest.deleteGame(id);
                  }}
                >
                  <ContentDelete color="white" />
                </IconButton>
              )}
            </header>
            <GameForm
              {...rest.game}
              id={id}
              onChange={rest.changeGame}
              onSubmit={id ? rest.updateGame : rest.saveGame}
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
