export const resizeWindow = (width: number, height?: number) => {
  window.innerWidth = width;
  if (height) window.innerHeight = height;
  window.dispatchEvent(new Event("resize"));
};
