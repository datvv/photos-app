import { IMAGE_LIST } from "./data/fake-data";

export function fetchImages(page: number, pageSize: number) {
  return new Promise<any>((resolve) => {
    setTimeout(() => {
      resolve(getImages(page, pageSize));
    }, 500);
  });
}

function getImages(page: number, pageSize: number) {
  const start = (page - 1) * pageSize;
  const end = page * pageSize;
  const images = IMAGE_LIST.slice(start, end);
  return images;
}

// function randomImages(number: number) {
//   return IMAGE_LIST.sort(function () {
//     return 0.5 - Math.random();
//   }).slice(0, number);
// }
