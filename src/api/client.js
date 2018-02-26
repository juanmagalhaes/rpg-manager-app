// @flow

import { get } from "./httpClient";

const SERVER_URL = process.env.SERVER_URL || "";
const API_URL = `http://${SERVER_URL}/api`;

class Client {
  async getCharacter(character_id: ?number) {
    return await get(`${API_URL}/character/${character_id || ""}`);
  }
}

export default new Client();
