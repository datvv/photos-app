import { IMAGE_LIST } from "./data/fake-data";

export function fetchImages(page: number, pageSize: number) {
  return new Promise<any>((resolve) => {
    setTimeout(() => {
      resolve(getImages(page, pageSize));
    }, 500);
  });
}

export function fetchDetailImage(id: string) {
  return new Promise<any>((resolve) => {
    setTimeout(() => {
      resolve(IMAGE_LIST.filter((item) => item.id == id)[0]);
    }, 100);
  });
}

function getImages(page: number, pageSize: number) {
  const start = (page - 1) * pageSize;
  const end = page * pageSize;
  return IMAGE_LIST.slice(start, end);
}

// function randomImages(number: number) {
//   return IMAGE_LIST.sort(function () {
//     return 0.5 - Math.random();
//   }).slice(0, number);
// }
