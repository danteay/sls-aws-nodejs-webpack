'use strict';

import { response } from '../utils/http';

export const handle = async (event) => {
  return response(200, {ping: "pong"});
}
