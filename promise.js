const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (param1) => {
  try {
    let data1 = await promiseTheaterIXX();
    let data2 = await promiseTheaterVGC();

    let jmlTidakMarah = 0;
    let jmlMarah = 0;

    for (let i = 0; i < data1.length; i++) {
      if (data1[i].hasil == "marah") {
        jmlMarah += 1;
      } else {
        jmlTidakMarah += 1;
      }
    }

    for (let i = 0; i < data2.length; i++) {
      if (data2[i].hasil == "marah") {
        jmlMarah += 1;
      } else {
        jmlTidakMarah += 1;
      }
    }

    if (param1 == "marah") {
      return jmlMarah.toString();
    } else {
      return jmlTidakMarah.toString();
    }
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  promiseOutput,
};
