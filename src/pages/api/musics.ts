// posts.js

import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
import applyRateLimit from './rateLimit';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  try {
    await applyRateLimit(req, res);

    switch (req.method) {
      case 'GET':
        const dirRelativeToPublicFolder = 'musics';
        const dir = path.resolve('./public', dirRelativeToPublicFolder);
        const filenames = fs.readdirSync(dir);

        res.json(
          filenames.map((fn: string) => `/${dirRelativeToPublicFolder}/${fn}`)
        );
        break;
    }
  } catch {
    return res.status(429).send('Too Many Requests');
  }
}
