import React from 'react';

function importAll(r: any) {
  return r.keys().map(r);
}

const images = importAll(
  require.context('/public/images/file/', false, /\.(png|JPG|svg)$/)
);

export default images.map((imagePath: string, index: number) => imagePath);
