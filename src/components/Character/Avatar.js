// @flow

import React from "react";
import defaultAvatar from "~/assets/default-avatar.png";
import styles from "./Avatar.module.scss";

type Props = {
  src: string
};

export default function Avatar({ src }: Props) {
  return src ? (
    <picture className={styles.avatar}>
      <img className={styles.portrait} alt="Character avatar." src={src} />
    </picture>
  ) : (
    <picture className={styles.defaultAvatar}>
      <img
        className={styles.portrait}
        alt="Character avatar."
        src={defaultAvatar}
      />
    </picture>
  );
}
