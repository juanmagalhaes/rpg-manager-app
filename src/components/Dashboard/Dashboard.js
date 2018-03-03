// @flow

import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { bindActionCreators } from "redux";
import Scrollable from "~/components/Scrollable";
import Game from "./Game";
import { getDashboardData } from "./actions";
import styles from "./Dashboard.module.scss";
import type { Props } from "./types";

export class Dashboard extends Component<Props> {
  componentDidMount() {
    this.props.getDashboardData();
  }

  render() {
    return (
      <section className={styles.container}>
        {this.props.charactersByGame.length ? (
          <Scrollable shouldScroll>
            <ul className={styles.dashboard}>
              {this.props.charactersByGame.map(item => (
                <li key={item.gameId}>
                  <Game {...item} />
                </li>
              ))}
            </ul>
          </Scrollable>
        ) : (
          <Scrollable shouldScroll>
            <div className={styles.welcome}>
              <span>
                Welcome to RPG Manager! <br />
                Here you can manage your rpg campaigns as you never did before.{" "}
                <br />
                Since it is you first time, why don't you start by{" "}
                <Link to="/game">create you first campaign</Link>?
              </span>
            </div>
          </Scrollable>
        )}
      </section>
    );
  }
}

function selector({ dashboard }) {
  return { ...dashboard };
}

function dispatcher(dispatch) {
  return bindActionCreators(
    {
      getDashboardData
    },
    dispatch
  );
}

export default connect(selector, dispatcher)(Dashboard);
