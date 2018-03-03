// @flow

import React from "react";
import TextField from "material-ui/TextField";
import DatePicker from "material-ui/DatePicker";
import CheckIcon from "material-ui/svg-icons/navigation/check";
import EditIcon from "material-ui/svg-icons/editor/mode-edit";
import FloatingActionButton from "material-ui/FloatingActionButton";
import UAParser from "ua-parser-js";
import styles from "./GameForm.module.scss";
import { ACCENT, SUCCESS } from "~/styles/constants";
import type { GameFormProps as Props } from "./types";

const parser = new UAParser();
const { type } = parser.getDevice();
const mobile = type === "mobile";

const muiStyles = {
  underlineFocus: { borderColor: ACCENT },
  label: { color: ACCENT },
  button: {
    margin: 0,
    top: "auto",
    right: 20,
    bottom: 20,
    left: "auto",
    position: "fixed"
  }
};

export default function GameForm(props: Props) {
  function handleChangeForField(field) {
    return (evt, date) =>
      props.onChange({
        field,
        value: evt ? evt.target.value : date
      });
  }

  function submit(evt) {
    evt.preventDefault();
    const { name, createdAt, sumary, id } = props;
    props.onSubmit({ name, createdAt, sumary }, id);
  }

  const date = props.createdAt ? new Date(props.createdAt) : null;
  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={submit}>
        <div className={styles.content}>
          <TextField
            fullWidth
            value={props.name || ""}
            floatingLabelText="Name"
            className={styles.input}
            onChange={handleChangeForField("name")}
            hintText="Name of your game or campaign"
            floatingLabelFocusStyle={muiStyles.label}
            underlineFocusStyle={muiStyles.underlineFocus}
          />
          <DatePicker
            onChange={handleChangeForField("createdAt")}
            hintText="When did the campign start?"
            className={styles.input}
            firstDayOfWeek={0}
            locale="en-US"
            value={date}
            fullWidth
          />
          <TextField
            fullWidth
            multiLine
            rows={mobile ? 6 : 12}
            className={styles.input}
            rowsMax={mobile ? 6 : 12}
            floatingLabelText="Sumary"
            value={props.sumary || ""}
            onChange={handleChangeForField("sumary")}
            floatingLabelFocusStyle={muiStyles.label}
            underlineFocusStyle={muiStyles.underlineFocus}
            hintText={!props.sumary ? "What is this game about?" : ""}
          />
        </div>
        <FloatingActionButton
          type="submit"
          style={muiStyles.button}
          backgroundColor={props.id ? SUCCESS : ACCENT}
        >
          {props.id ? <EditIcon /> : <CheckIcon />}
        </FloatingActionButton>
      </form>
    </div>
  );
}
