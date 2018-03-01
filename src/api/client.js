// @flow

import { get, post, patch, remove } from "./httpClient";
import type { Game } from "~/components/GameManager";

const SERVER_URL = process.env.SERVER_URL || "";
const API_URL = `http://${SERVER_URL}/api`;

class Client {
  async getCharacter(id: ?number) {
    return await get(`${API_URL}/character/${id || ""}`);
  }

  async getGame(id: ?number) {
    return await get(`${API_URL}/game/${id || ""}`);
  }

  async deleteGame(id: number) {
    return await remove(`${API_URL}/game/${id}/`);
  }

  async saveGame(game: Game) {
    return await post(`${API_URL}/game/`, game);
  }

  async updateGame(id: number, game: Game) {
    return await patch(`${API_URL}/game/${id || ""}/`, game);
  }
}

export default new Client();
