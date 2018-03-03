// @flow

import type { Character } from "../Character";

export type CharacterFormProps = {
  character: Character,
  onChange: Function,
  onDelete: Function,
  onSubmit: Function // TODO improve this type for union type SaveGame | UpdateGame
};
