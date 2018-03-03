// @flow

import type { Character } from "~/components/CharacterManager";
import type { RouterInjectedProps } from "~/types/router";

export type GameContainer = {
  gameName: string,
  gameSumary: string,
  gameId: number
};

export type HeaderProps = RouterInjectedProps & {
  gameName: string,
  gameId: number
};

export type SumaryProps = {
  gameId: number,
  text: string
};

export type GameProps = GameContainer &
  RouterInjectedProps & {
    characters: Array<Character>
  };
