const inputString = "20220420201001";
// Please format the inputString with two solutions and then design a benchmark test to compare the two solutions' performance.

// input
// the input format is correct,no verification is required; the length of the string still is 14.

// expect outputString: 2022Y04M20D 20:10:01
//

// solution one:
function format1() {
  return inputString.replace(
    /(\d{4})(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})/,
    "$1Y$2M$3D $4:$5:$6"
  );
}
// solution two:
function format2() {
  const [Y, M, D, h, m, s] = [
    inputString.slice(0, 4),
    inputString.slice(4, 6),
    inputString.slice(6, 8),
    inputString.slice(8, 10),
    inputString.slice(10, 12),
    inputString.slice(-2),
  ];
  return `${Y}Y${M}M${D}D ${h}:${m}:${s}`;
}

// benchmark test
// You need to design a benchmark to compare the performance of the two solutions.
function benchmark1(func) {
  console.time(func.name);
  func();
  console.timeEnd(func.name);
}

function benchmark2(func) {
  const start = performance.now();
  func();
  const end = performance.now();
  return end - start;
}

function benchmark3(func) {
  // performance.measureUserAgentSpecificMemory 暂时先不写了
}

benchmark1(format1);
benchmark1(format2);
console.log("------");
console.log(benchmark2(format1));
console.log(benchmark2(format2));
