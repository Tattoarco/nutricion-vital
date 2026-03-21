export const optimizeImage = (url, width = 500) => {
  return url.replace("/upload/", `/upload/f_auto,q_auto:best,w_${width}/`);
};
