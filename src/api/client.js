// @flow

import { get, post, patch, remove } from "./httpClient";
import type { Game } from "~/components/GameManager";
import type { Character } from "~/components/CharacterManager";

class Client {
  async getCharacter(id: ?number, gameId: ?number) {
    return await get(
      `character/${id || ""}${gameId ? "?gameId=" + gameId : ""}`
    );
  }

  async saveCharacter(character: Character) {
    return await post("character/", {
      ...character,
      game: character.gameId
    });
  }

  async updateCharacter(id: number, character: Character) {
    return await patch(`character/${id || ""}/`, {
      ...character,
      game: character.gameId
    });
  }

  async deleteCharacter(id: number) {
    return await remove(`character/${id}/`);
  }

  async getGame(id: ?number) {
    return await get(`game/${id || ""}`);
  }

  async deleteGame(id: number) {
    return await remove(`game/${id}/`);
  }

  async saveGame(game: Game) {
    return await post("game/", game);
  }

  async updateGame(id: number, game: Game) {
    return await patch(`game/${id || ""}/`, game);
  }
}

export default new Client();
