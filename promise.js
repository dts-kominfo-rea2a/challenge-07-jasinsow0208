const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (param1) => {
  try {
    const data1 = await promiseTheaterIXX();
    const data2 = await promiseTheaterVGC();

    const jml =
      data1.filter((segment) => {
        return segment.hasil == param1;
      }).length +
      data2.filter((segment) => {
        return segment.hasil == param1;
      }).length;

    return jml;
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  promiseOutput,
};
