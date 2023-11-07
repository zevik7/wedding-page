import { Photo } from 'react-photo-album';

function importAll(r: any) {
  return r.keys().map(r);
}

const images = importAll(
  require.context('/public/images/file/', false, /\.(png|JPG|svg)$/)
);

const imagesUrl = images.map((imagePath: string, index: number) => imagePath);

const carouselImages: Photo[] = imagesUrl.map((photo: any) => {
  return {
    src: photo.default.src,
    width: photo.default.width,
    height: photo.default.height,
  };
});

export default carouselImages;
