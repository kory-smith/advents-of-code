const testInput = `
...#......
.......#..
#.........
..........
......#...
.#........
.........#
..........
.......#..
#...#.....`;

const input = `
...........#..........................#..................................................................#......#......#....................
...#....................#..........................................#..............#...........#.............................................
.............................................................................................................................#..............
........#...........#.............#..........#.....#...............................................................#........................
.............................#..............................................................................................................
........................................................................................................#..................................#
.....#..........#....................#.................#............................#.......................................................
.....................................................................#...................#.......#....................................#.....
............................................................................................................................................
........................................#....................................................................#..............#...............
...........#........................................#............#.....................................................#...........#........
......................#.............#..........................................................#.................#..........................
.............................................#..........................................................#...................................
.#.............................#............................#...............#.............#...................................#.............
............................................................................................................................................
...................................................................................#........................................................
.......#.......................................#...............#..........................................#.........#................#......
....................#..............#....................................................#........#........................................#.
...................................................#...................#.....................................................#..............
..........................#....................................................#.............................#..............................
............................................................................................................................................
.........#.....#...........................#...............................................#.......................#........................
..........................................................................................................................#.............#...
.............................................................#..............#.........#...........................................#.........
..................................#....................................................................#....................................
.................................................................................................................#..........................
.............#......................................................#.............................#..................................#......
......................#.....#...........#........#.........#.....................#.........................#...............#................
................................................................#................................................................#..........
.....#.......................................#.......................................................................#......................
.........................................................................#................#..........#......................................
..................#.....#.....................................................#..............................#..............................
.....................................#..................................................................................................#...
.............................................................#..........................................#......................#............
.....................................................#..............#................#............#...................#.....................
............................................................................#........................................................#......
...#.......#................................................................................................................................
.................#............................#..............................................................#............#.................
...........................#.............................................................#......#...........................................
...............................................................#........#...........#.......................................................
......#......................................................................................................................#......#......#
........................................................#................................................#..................................
...............................#................#.............................#.............#...............................................
.........................................#...........................#......................................................................
.#.........................#........#...........................#..................#..................#.....................................
.....................................................#........................................................#...........#.................
.......#..........#......................................................................#..........................#.............#.......#.
............................................................................................................................................
............................................................................................................................................
..................................................................................................#.........................................
..................................#.............................#......#..............#..............................................#......
............................................................................................................................................
.............................................#...................................#........................#.................................
.....#......#............#.....................................................................................#..................#.........
...........................................................#.................................................................#..............
................................#...................................................................................#.......................
................................................#..............................................#........#...................................
..........#..........#.....#........................................................#...........................................#...........
......................................#........................................#..........#..............................................#..
...................................................................#.....#.............................................#....................
.....#..........#.........................................#.................................................................................
.............................................#....................................#...........#.............................................
..........................................................................................................#......................#.........#
.#.................#............#........#..................................................................................................
...........................#..............................................................#..................................#..............
.............#......................#.................................................................#.................................#...
.......................#............................#......#....................................#...........................................
........#......................................#....................#.......................................................................
...............................#...............................................................................#............................
................................................................#.................#........#................................................
.#.....................................................................................................................#....................
................#..........#.......................#....................................................#...................#........#......
..............................................................................................#.............................................
..........#............#.............................................#......................................................................
...............................#.....#....................#.................................................................................
.....................................................................................#.............................................#........
..........................................................................................#........................#........................
...#....................................#..........................#........................................................................
............................#.......................................................................#.......................................
..............................................#.............................................................................................
..................#.....#.......................................#...........#.........................................................#.....
#...........#.......................................................................................................#.......................
..........................................#............#.........................#......................#...................................
.............................................................#............................#.................................................
.........#..........#...............................................#...........................#.......................#..................#
..........................#......................#....................................#......................................#..............
.....................................#.............................................................................................#........
.............#..................#...........................................................................................................
.......#..................................#..............................#.................#.....................#......................#...
.....................#......................................#...............................................................................
.............................#.........................#..........................#..............#..........................................
.......................................#................................................................#...........#.......................
............................................................................................................................................
............................................................................................................................................
..................#............#............#.......#.......................#...............................................#...............
.#........#...........................................................#...............................................#.....................
...............................................................................................................#............................
...................................................................................#.......................................................#
................................................#...........#...............................................................................
...................................................................................................#..............#.........................
.........#............#..............#.................................#...................#...................................#............
................#..............#...................#.............................#..........................................................
.............................................#................#........................................#..................#.................
.....#.........................................................................................................#...................#........
...................................#......................#........#......................................................................#.
........................#.............................................................#........#............................................
..#......................................#....................................#.............................................................
................#...............#.....................#..........................................................#..........................
.....................................................................................................#.......................#..............
...............................................#...........................................................................................#
.........#...........#.....................................#................#........................................#......................
...#..........#.........................#............................#...............................................................#......
............................................................................................................#.............#.................
..........................#...................................#............................#...................................#............
.....................................................................................#......................................................
..........#..............................................................................................................................#..
................#..............#.............#.........................#................................#...........................#.......
....#...............................#.......................#....................#..........................................................
....................................................#...........................................................#............#..............
.................................................................................................#..........................................
............................................................................................................................................
.........#...........#.....................#................................#..........#...........................#........................
...................................#........................................................................................................
..................................................................................#................................................#........
..............#.........................................................#.................................#...................#.........#...
..#...........................................#.............................................................................................
...........................#.........................................................................................#......................
...............................................................#............................................................................
.........#..........#....................................................................#.......#......#........................#..........
...................................#.................#...........................#.............................#............................
.....#.............................................................#........................................................................
.............................#..............................................................................................................
..............#.........................#...........................................................#..........................#.........#..
................................................................#...........................................................................
..#.........................................#.................................#..................................#..........................
.......................#.......#.......................................#....................#..............................#................
....................................................................................#...................#..........................#........
.....#.....#....................................#...................................................................#.......................
..........................................#............#....................................................................................
...............#............................................#..................................#............................................`

// First, we'll need to expand the galaxies!
// This involves determining which rows and columns contain no galaxies, or # symbols.

// The x point is equal to...what? OH. It's point % rowLength. 0 % 2 is 0, 1 % 2 is 1, 2 % 2 is 0, etc. And I guess we add 1 to it.
// The y point is equal to...what? point / rowLength? And we take the first part? 0 / 2 =0. 1/2 = 0.5, and we take the zero. THAT'S IT.

function getRowLength(input) {
  return input.split("\n")[1].length;
}

function flattenInput(input) {
  return input.replace(/\n/g, "");
}

function makeRow(input, y): string[] {
  const rowLength = getRowLength(input);
  const flatInput = flattenInput(input);

  return Array.from(flatInput.slice(rowLength * y, rowLength * (y + 1)));
}

function makeColumn(input, x) {
  const column: string[] = [];
  const rowLength = getRowLength(input);
  const flatInput = flattenInput(input);
  let currentIndex = x;
  while (flatInput[currentIndex] !== undefined) {
    column.push(flatInput[currentIndex]);
    currentIndex += rowLength;
  }
  return column;
}

function rowHasNoGalaxies(row: string[]) {
  return !row.includes("#");
}

function columnHasNoGalaxies(column: string[]) {
  return !column.includes("#");
}

function createExpansionMap(input) {
  const map: {
    columns: number[];
    rows: number[];
  } = {
    columns: [],
    rows: [],
  };

  const rowLength = getRowLength(input);
  const flatInput = flattenInput(input);

  // We check each row once and each column once
  // How to check each column? | There are rowLength columns

  for (const columnIndex of range(rowLength)) {
    const column = makeColumn(input, columnIndex);
    if (columnHasNoGalaxies(column)) {
      map.columns.push(columnIndex);
    }
  }
  // How check each row? -- There are flatLength / rowLength rows
  for (const rowIndex of range(flatInput.length / rowLength)) {
    const row = makeRow(input, rowIndex);
    if (rowHasNoGalaxies(row)) {
      map.rows.push(rowIndex);
    }
  }
  return map;
}

function range(size, startAt = 0) {
  return [...Array(size).keys()].map((i) => i + startAt);
}

function expandCosmos(
  input: string,
  expansionMap: {
    columns: number[];
    rows: number[];
  }
) {
  let temp = "";
  const rows = input.split("\n").slice(1);
  for (let i = 0; i < rows.length; i++) {
    const helper = Array.from(rows[i]);
    for (let j = 0; j < expansionMap.columns.length; j++) {
      const rowIndex = expansionMap.columns[j];
      if (j === 0) {
        helper.splice(rowIndex, 0, ".");
      } else {
        helper.splice(rowIndex + j, 0, ".");
      }
    }
    if (expansionMap.rows.includes(i)) {
      temp += ".".repeat(helper.length);
      temp += "\n";
    }
    temp += helper.join("");
    temp += "\n";
  }
  return temp;
}

// ChatGPT, but I don't care
function allIndicesOf(arr, value) {
  return arr.reduce((indices, el, idx) => {
    if (el === value) {
      indices.push(idx);
    }
    return indices;
  }, []);
}

function getGalaxyCoordinates(expandedInput: string) {
  const rowLength = expandedInput.split("\n")[0].length;
  const flatExpandedInput = expandedInput.replace(/\n/g, "");
  const galaxyIndices = allIndicesOf(Array.from(flatExpandedInput), "#");

  const coordinates: Array<[number, number]> = [];
  galaxyIndices.forEach((galaxyIndex) => {
    const x = (galaxyIndex % rowLength) + 1;
    const y = Math.floor(galaxyIndex / rowLength);
    coordinates.push([x, y]);
  });
  return coordinates;
}

function getUniquePairs(number: number) {
  const pairs = new Set();
  const thisRange = range(number, 1);

  for (const number of thisRange) {
    for (const numberToCheckAgainst of thisRange) {
      if (number === numberToCheckAgainst) continue;
      pairs.add([number, numberToCheckAgainst].sort().join("-"));
    }
  }
  return Array.from(pairs) as string[];
}

// Algebra baby
function calculateManhattanDistance(point1: [number, number], point2: [number, number]) {
  const [x1, y1] = point1;
  const [x2, y2] = point2;
  return Math.abs(x2 - x1) + Math.abs(y2 - y1);
}


function doWork(input) {
  const expandedCosmos = expandCosmos(input, createExpansionMap(input));
  const galaxies = getGalaxyCoordinates(expandedCosmos);
  const galaxyPairs = getUniquePairs(galaxies.length);

  let shortestPathsSum = 0;
  for (const pair of galaxyPairs) {
    const galaxy1Coordinates = galaxies[Number(pair.split("-")[0]) - 1];
    const galaxy2Coordinates = galaxies[Number(pair.split("-")[1]) - 1];

    shortestPathsSum += calculateManhattanDistance(
      galaxy1Coordinates,
      galaxy2Coordinates
    );
  }
	return shortestPathsSum
}

console.log(doWork(input));
