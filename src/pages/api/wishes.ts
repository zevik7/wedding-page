// posts.js

import { NextApiRequest, NextApiResponse } from 'next';
import clientPromise from '../../lib/mongodb';
import applyRateLimit, {
  applyMiddleware,
  getRateLimitMiddlewares,
} from './rateLimit';

const middlewares = getRateLimitMiddlewares({
  limit: 2,
  windowMs: 15 * 60 * 1000,
}).map(applyMiddleware);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  try {
    const client = await clientPromise;
    const db = client.db('sample_mflix');

    switch (req.method) {
      case 'POST':
        await Promise.all(
          middlewares.map((middleware) => middleware(req, res))
        );
        let bodyObject = JSON.parse(req.body);
        const created_at = new Date();
        let wishId: any = await db
          .collection('wishes')
          .insertOne({ ...bodyObject, created_at });
        res.json(wishId);
        break;
      case 'GET':
        await applyRateLimit(req, res);

        const wishes = await db
          .collection('wishes')
          .find({})
          .sort({
            created_at: -1,
          })
          .toArray();
        res.json(wishes);
        break;
    }
  } catch {
    return res.status(429).send('Too Many Requests');
  }
}
