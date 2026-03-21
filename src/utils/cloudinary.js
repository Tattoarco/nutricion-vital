export const optimizeImage = (url, width = 300) => {
  return url.replace(
    "/upload/",
    `/upload/f_auto,q_auto:good,w_${width}/`
  );
};