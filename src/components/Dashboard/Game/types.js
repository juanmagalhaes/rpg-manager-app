// @flow

import type { Character } from "../Character";
import type { RouterInjectedProps } from "~/types/router";

export type GameContainer = {
  gameName: string,
  gameSumary: string,
  gameId: number
};

export type HeaderProps = {
  gameName: string,
  gameId: number
};

export type SumaryProps = {
  text: string
};

export type GameProps = GameContainer &
  RouterInjectedProps & {
    characters: Array<Character>
  };
