'use strict';

export const response = (code, body) => {
  return {
    statusCode: code,
    body: JSON.stringify(body),
  }
}
