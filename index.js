var rect = {
  perimeter: (x, y) => {
    return 2 * (x + y);
  },
  area: (x, y) => {
  return  x * y;
  },
};

function solveRec(l, b) {
  console.log(`The perimeter for l=${l} and b=${b} and perimeter= ${rect.perimeter(l, b)}`);
  console.log(`The area for l=${l} and b=${b} and area= ${rect.area(l, b)}`);
}

solveRec(2, 3);
solveRec(2, 3);
solveRec(2, 3);
