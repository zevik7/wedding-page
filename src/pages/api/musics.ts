// posts.js

import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
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
}
