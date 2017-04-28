console.log(a(1));

function a(num) {
  if (num > 20) return num;
  console.log("a", num)
  return b(num +2);
}

function b(num) {
  console.log("b", num)
  return c(num) + 1;
}

function c(num) {
  console.log("c", num)
  return a(num * 2);
}
