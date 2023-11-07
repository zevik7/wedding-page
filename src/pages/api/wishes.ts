// posts.js

import { NextApiRequest, NextApiResponse } from 'next';
import clientPromise from '../../lib/mongodb';
import { Timestamp } from 'mongodb';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const client = await clientPromise;
  const db = client.db('sample_mflix');
  switch (req.method) {
    case 'POST':
      let bodyObject = JSON.parse(req.body);
      const created_at = new Date();
      let wishId: any = await db
        .collection('wishes')
        .insertOne({ ...bodyObject, created_at });
      res.json(wishId);
      break;
    case 'GET':
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
}
