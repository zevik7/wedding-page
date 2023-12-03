// @ts-nocheck
import rateLimit from 'express-rate-limit';

export const applyMiddleware = (middleware) => (request, response) =>
  new Promise((resolve, reject) => {
    middleware(request, response, (result) =>
      result instanceof Error ? reject(result) : resolve(result)
    );
  });

const getIP = (request) =>
  request.ip ||
  request.headers['x-forwarded-for'] ||
  request.headers['x-real-ip'] ||
  request.connection.remoteAddress;

export const getRateLimitMiddlewares = ({
  limit = 10,
  windowMs = 2 * 60 * 1000, // 2 mins
} = {}) => [rateLimit({ keyGenerator: getIP, windowMs, max: limit })];

// This must be defined out of applyRateLimit and API routes,
// otherwise it will never work because it create new when after request call
const middlewares = getRateLimitMiddlewares();

async function applyRateLimit(request, response) {
  await Promise.all(
    middlewares
      .map(applyMiddleware)
      .map((middleware) => middleware(request, response))
  );
}

export default applyRateLimit;
