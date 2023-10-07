import React from 'react';

// Get all image file paths from the 'images' folder
function importAll(r: any) {
  return r.keys().map(r);
}

const images = importAll(
  require.context('/public/images/file/', false, /\.(png|JPG|svg)$/)
);

const ImageGallery = () => {
  return (
    <div
      style={{
        height: '100vh',
      }}
    >
      {images.map((imagePath: string, index: number) => (
        <img
          width={100}
          height={100}
          key={index}
          // @ts-ignore
          src={imagePath.default.src}
          alt={`Image ${index}`}
        />
      ))}
    </div>
  );
};

export default ImageGallery;
