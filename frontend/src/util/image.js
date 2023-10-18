export const replaceImgUrl = (url) => {
  if (url.includes("googleapis")) {
    return url;
  }
  return `${process.env.REACT_APP_IMG_BASE_URL}/${url}`;
};
