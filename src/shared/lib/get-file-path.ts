import { instance } from "../api/instance";

function getImagePath(image: string): string {
  const imagePath = instance.getUri() + "/image/" + image;
  return imagePath;
}
export { getImagePath };