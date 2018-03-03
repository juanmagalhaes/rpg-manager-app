// @flow

import React from "react";
import TextField from "material-ui/TextField";
import Avatar from "~/components/CharacterManager/Character/Avatar";
import Scrollable from "~/components/Scrollable";
import { ACCENT } from "~/styles/constants";
import styles from "./CharacterForm.module.scss";
import type { Character } from "../Character";

type Props = {
  character: Character,
  onChange: Function,
  setAvatar: Function,
  mobile: boolean
};

const muiStyles = {
  label: { color: ACCENT },
  underlineFocus: { borderColor: ACCENT }
};

export default function StatusTab({
  character,
  onChange,
  setAvatar,
  mobile
}: Props) {
  function handleChangeForField(field) {
    return ({ target }) => onChange({ field, value: target.value });
  }

  return (
    <Scrollable shouldScroll={mobile}>
      <div className={styles.content}>
        <div className={styles.avatarRow}>
          <div className={styles.avatar}>
            <Avatar src={character.avatar} />
          </div>
          <TextField
            fullWidth
            value={character.avatar}
            floatingLabelText="Avatar"
            className={styles.input}
            onBlur={setAvatar}
            onChange={handleChangeForField("avatar")}
            floatingLabelFocusStyle={muiStyles.label}
            underlineFocusStyle={muiStyles.underlineFocus}
          />
        </div>
        <div className={styles.row}>
          <TextField
            fullWidth
            value={character.name}
            floatingLabelText="Name"
            className={styles.input}
            onChange={handleChangeForField("name")}
            floatingLabelFocusStyle={muiStyles.label}
            underlineFocusStyle={muiStyles.underlineFocus}
          />
          <TextField
            fullWidth
            value={character.player}
            floatingLabelText="Player"
            className={styles.input}
            onChange={handleChangeForField("player")}
            floatingLabelFocusStyle={muiStyles.label}
            underlineFocusStyle={muiStyles.underlineFocus}
          />
        </div>
        <div className={styles.row}>
          <TextField
            fullWidth
            value={character.race}
            floatingLabelText="Race"
            className={styles.input}
            onChange={handleChangeForField("race")}
            floatingLabelFocusStyle={muiStyles.label}
            underlineFocusStyle={muiStyles.underlineFocus}
          />
          <TextField
            fullWidth
            type="number"
            value={character.age}
            floatingLabelText="Age"
            className={styles.input}
            onChange={handleChangeForField("age")}
            floatingLabelFocusStyle={muiStyles.label}
            underlineFocusStyle={muiStyles.underlineFocus}
          />
        </div>
        <div className={styles.row}>
          <TextField
            fullWidth
            value={character.characterClass}
            floatingLabelText="Class"
            className={styles.input}
            onChange={handleChangeForField("characterClass")}
            floatingLabelFocusStyle={muiStyles.label}
            underlineFocusStyle={muiStyles.underlineFocus}
          />
          <TextField
            fullWidth
            type="number"
            value={character.level}
            floatingLabelText="Level"
            className={styles.input}
            onChange={handleChangeForField("level")}
            floatingLabelFocusStyle={muiStyles.label}
            underlineFocusStyle={muiStyles.underlineFocus}
          />
        </div>
        <div className={styles.row}>
          <TextField
            fullWidth
            value={character.healthPoints}
            floatingLabelText="Health Points"
            className={styles.input}
            onChange={handleChangeForField("healthPoints")}
            floatingLabelFocusStyle={muiStyles.label}
            underlineFocusStyle={muiStyles.underlineFocus}
          />
          <TextField
            fullWidth
            type="number"
            value={character.magicPoints}
            floatingLabelText="Magic Points"
            className={styles.input}
            onChange={handleChangeForField("magicPoints")}
            floatingLabelFocusStyle={muiStyles.label}
            underlineFocusStyle={muiStyles.underlineFocus}
          />
        </div>
      </div>
    </Scrollable>
  );
}
