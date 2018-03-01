// @flow

import type { Game, ChangeGame } from "../types";

export type GameFormProps = Game & {
  onChange: ChangeGame,
  onSubmit: Function // TODO improve this type for union type SaveGame | UpdateGame
};
