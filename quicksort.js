const numbers = [5, 3, 7, 6, 4, 9, 1, 2, 8];

const quicksort = (arr) => {

  // Przypadek bazowy (ang. base case)
  if (arr.length <= 1) return arr;

  // Wybór losowego pivota
  const pivotIndex = Math.floor(arr.length / 2);

  // Usuwamy pivot z tablicy przy jednoczesnym przypisaniu go do zmiennej
  const pivot = arr.splice(pivotIndex, 1);

  // Tablice, do których będziemy dodawać elementy
  // (left - mniejsze lub równe od pivota)
  // (right - większe od pivota)
  const left = [];
  const right = [];

  // Iterujemy przez tablicę w celu podziału na dwie tablice (left, right)
  for (let i = 0; i < arr.length; i++) {
    arr[i] <= pivot ?
        left.push(arr[i]) :
        right.push(arr[i]);
  }

  return quicksort(left).concat(pivot).concat(quicksort(right));
};

console.log(quicksort(numbers)); // [1, 2, 3, 4, 5, 6, 7, 8, 9]