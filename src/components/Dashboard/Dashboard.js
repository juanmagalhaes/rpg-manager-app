// @flow

import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Scrollbars } from "react-custom-scrollbars";
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
      <Scrollbars autoHide>
        <ul className={styles.dashboard}>
          {this.props.charactersByGame.map(item => (
            <li key={item.gameId}>
              <Game {...item} />
            </li>
          ))}
        </ul>
      </Scrollbars>
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
