let angka = [5, 9, 12, 18, 20, 21, 27, 30];

let cariAngka = function (param) {
  let hasil = param
    .filter((e) => {
      return e > 10 && e % 3 === 0;
    })
    .map((e) => e - 2);
  let total = hasil.reduce((a, b) => {
    return a + b;
  });

  return total;
};

let hasil = cariAngka(angka);
console.log(hasil);
