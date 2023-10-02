export const isObjectEmpty = function (object) {
  return Object.keys(object).length === 0 && object.constructor === Object;
};
