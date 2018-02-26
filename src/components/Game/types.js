// @flow

import type { Character } from "~/components/Character";

export type HeaderProps = {
  gameName: string,
  gameId: number
};

export type Props = HeaderProps & {
  characters: Array<Character>
};
