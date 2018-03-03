// @flow

import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import TextField from "material-ui/TextField";
import FlatButton from "material-ui/FlatButton";
import FloatingActionButton from "material-ui/FloatingActionButton";
import AddIcon from "material-ui/svg-icons/content/add";
import RemoveIcon from "material-ui/svg-icons/content/remove";
import Scrollable from "~/components/Scrollable";
import {
  addItem,
  removeItem,
  addAbility,
  removeAbility,
  changeCharacterNestedlists
} from "../actions";
import { ACCENT, SUCCESS, SECONDARY_TEXT } from "~/styles/constants";
import formStyles from "./CharacterForm.module.scss";
import styles from "./ListTab.module.scss";

type Props = {
  type: string,
  changeCharacterNestedlists: Function,
  removeItem: Function,
  removeAbility: Function,
  addItem: Function,
  addAbility: Function
};

const muiStyles = {
  label: { color: ACCENT },
  underlineFocus: { borderColor: ACCENT }
};

export function ListTab(props: Props) {
  const isItem = props.type === "items";

  function handleChangeForField(idx, field) {
    const listType = isItem ? "items" : "abilities";
    return ({ target }) =>
      props.changeCharacterNestedlists(idx, listType, {
        field,
        value: target.value
      });
  }

  return (
    <div className={styles.listTab}>
      <Scrollable shouldScroll>
        <ul>
          {props[props.type].map((item, idx) => (
            <li key={idx}>
              <div className={styles.row}>
                <FloatingActionButton
                  mini
                  onClick={() =>
                    isItem ? props.removeItem(idx) : props.removeAbility(idx)
                  }
                  backgroundColor={SECONDARY_TEXT}
                >
                  <RemoveIcon />
                </FloatingActionButton>
                <TextField
                  fullWidth
                  value={item.name}
                  floatingLabelText="Name"
                  className={formStyles.input}
                  onChange={handleChangeForField(idx, "name")}
                  floatingLabelFocusStyle={muiStyles.label}
                  underlineFocusStyle={muiStyles.underlineFocus}
                />
                <TextField
                  fullWidth
                  className={formStyles.input}
                  value={item.description}
                  floatingLabelText="Description"
                  floatingLabelFocusStyle={muiStyles.label}
                  onChange={handleChangeForField(idx, "description")}
                  underlineFocusStyle={muiStyles.underlineFocus}
                />
              </div>
            </li>
          ))}
        </ul>
      </Scrollable>
      <div>
        <FlatButton
          label={`Add ${isItem ? "Item" : "Ability"}`}
          onClick={() => (isItem ? props.addItem() : props.addAbility())}
          hoverColor={SUCCESS}
          icon={<AddIcon />}
        />
      </div>
    </div>
  );
}

function selector({ characterManager }) {
  return {
    items: characterManager.character.items,
    abilities: characterManager.character.abilities
  };
}

function dispatcher(dispatch) {
  return bindActionCreators(
    {
      addItem,
      removeItem,
      addAbility,
      removeAbility,
      changeCharacterNestedlists
    },
    dispatch
  );
}

export default connect(selector, dispatcher)(ListTab);
