import { Request } from 'express';

export const getIpAddress = (request: Request) => {
  let result = request.socket.remoteAddress;
  if (!request.headers['x-forwarded-for']) {
    return result;
  } else {
    if (Array.isArray(request.headers['x-forwarded-for'])) {
      result = request.headers['x-forwarded-for'][0];
    } else {
      result = request.headers['x-forwarded-for'];
    }
  }
  return result;
};
