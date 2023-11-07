const shimmer = (w: number, h: number) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#333" offset="20%" />
      <stop stop-color="#222" offset="50%" />
      <stop stop-color="#333" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#333" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`;

const toBase64 = (str: string) =>
  typeof window === 'undefined'
    ? Buffer.from(str).toString('base64')
    : window.btoa(str);

const formatUnixTimestamp = (
  timestamp: number,
  formatString = 'yyyy-MM-ddTHH:mm:ss'
) => {
  const dateJS = new Date(timestamp * 1000);

  const year = String(dateJS.getFullYear());
  const month = String(dateJS.getMonth() + 1).padStart(2, '0');
  const day = String(dateJS.getDate()).padStart(2, '0');
  const hours = String(dateJS.getHours()).padStart(2, '0');
  const minutes = String(dateJS.getMinutes()).padStart(2, '0');
  const seconds = String(dateJS.getSeconds()).padStart(2, '0');

  let formattedDate = formatString
    .replace('yyyy', year)
    .replace('MM', month)
    .replace('dd', day)
    .replace('HH', hours)
    .replace('mm', minutes)
    .replace('ss', seconds);

  return formattedDate;
};

export { shimmer, toBase64, formatUnixTimestamp };
