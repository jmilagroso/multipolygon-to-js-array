const Typcheckjs = require('typcheckjs');

module.exports = (data) => {
  const array = [];

  if (Typcheckjs.isString(data) && data.includes('MULTIPOLYGON')) {
    let str = data.replace('MULTIPOLYGON (((', '');
    str = str.replace(')))');

    const splittedCommaArray = str.split(', ');

    splittedCommaArray.map((splittedComma) => {
      const coordinate = splittedComma.split(' ');
      return array.push([parseFloat(coordinate[0]), parseFloat(coordinate[1])]);
    });
  }

  return array;
};
