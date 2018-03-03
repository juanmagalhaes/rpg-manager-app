// @flow

import React, { Component } from "react";
import { Tabs, Tab } from "material-ui/Tabs";
import CheckIcon from "material-ui/svg-icons/navigation/check";
import EditIcon from "material-ui/svg-icons/editor/mode-edit";
import DeleteIcon from "material-ui/svg-icons/action/delete";
import FloatingActionButton from "material-ui/FloatingActionButton";
import UAParser from "ua-parser-js";
import StatusTab from "./StatusTab";
import ListTab from "./ListTab";
import styles from "./CharacterForm.module.scss";
import { ACCENT, DARK_PRIMARY, SUCCESS, DANGER } from "~/styles/constants";
import type { CharacterFormProps as Props } from "./types";

const muiStyles = {
  buttonEdit: {
    margin: 0,
    top: "auto",
    right: 20,
    bottom: 20,
    left: "auto",
    position: "fixed"
  },
  buttonDelete: {
    margin: 0,
    top: "auto",
    right: 28,
    bottom: 90,
    left: "auto",
    position: "fixed"
  },
  tabs: {
    backgroundColor: DARK_PRIMARY
  },
  tabsInkbar: {
    backgroundColor: ACCENT
  }
};

type State = {
  mobile: boolean,
  loadAvatar: boolean
};

export default class CharacterForm extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      mobile: this.isMobile(),
      loadAvatar: !!props.character.avatar
    };

    window.addEventListener("resize", () =>
      this.setState({ mobile: this.isMobile() })
    );
  }

  isMobile() {
    const parser = new UAParser();
    const { type } = parser.getDevice();
    return type === "mobile";
  }

  submit(evt: Object) {
    evt.preventDefault();
    if (this.props.character.id) {
      let data = { ...this.props.character };
      delete data.id;
      this.props.onSubmit(data, this.props.character.id);
    } else {
      this.props.onSubmit(this.props.character);
    }
  }

  render() {
    return (
      <div className={styles.container}>
        <form className={styles.form} onSubmit={this.submit.bind(this)}>
          <Tabs
            style={{ height: "90%" }}
            inkBarStyle={muiStyles.tabsInkbar}
            tabItemContainerStyle={muiStyles.tabs}
            tabTemplateStyle={{ height: "100%", width: "100%" }}
            contentContainerStyle={{
              height: "100%",
              display: "flex",
              flexDirection: "column"
            }}
          >
            <Tab label="Status">
              <StatusTab
                mobile={this.state.mobile}
                onChange={this.props.onChange}
                character={this.props.character}
                setAvatar={() =>
                  this.setState({
                    loadAvatar: !this.state.loadAvatar
                  })
                }
              />
            </Tab>
            <Tab label="Abilities">
              <ListTab type="abilities" />
            </Tab>
            <Tab label="Items">
              <ListTab type="items" />
            </Tab>
          </Tabs>
          {this.props.character.id && (
            <FloatingActionButton
              mini
              onClick={() => this.props.onDelete(this.props.character.id)}
              style={muiStyles.buttonDelete}
              backgroundColor={DANGER}
            >
              <DeleteIcon />
            </FloatingActionButton>
          )}
          <FloatingActionButton
            type="submit"
            style={muiStyles.buttonEdit}
            backgroundColor={this.props.character.id ? SUCCESS : ACCENT}
          >
            {this.props.character.id ? <EditIcon /> : <CheckIcon />}
          </FloatingActionButton>
        </form>
      </div>
    );
  }
}
