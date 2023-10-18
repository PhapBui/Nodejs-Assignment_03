export const replaceImgUrl = (url) => {
  if (url.includes("googleapis")) {
    return url;
  }
  return `${import.meta.env.VITE_IMG_BASE_URL}/${url}`;
};
