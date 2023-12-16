const testInput = `
.....
.F-7.
.|.|.
.L-J.
.....`;

const clutteredTestInput = `
-L|F7
7S-7|
L|7||
-L-J|
L|-JF`;

// I have NO idea how I'm gonna manage this one.

const pipes = {
  "|": ["n", "s"],
  "-": ["e", "w"],
  L: ["n", "e"],
  J: ["n", "w"],
  "7": ["s", "w"],
  F: ["s", "e"],
};

const opposites = {
  n: "s",
  s: "n",
  e: "w",
  w: "e",
};

// OH! We're in two dimensional space. So I can represent these as indices where l = row length and i = index of the pipe!
// Look for a pipe north of pipe at index i means look at index i - row length.
// So this represents WHERE we're looking for the pipes. But there's also the issue of not all pipes being compatible...
const directionLookup = {
  n: "i - l",
  s: "i + l",
  e: "i + 1",
  w: "i - 1",
};

function pipesConnect(
  pipe1: {
    piece: keyof typeof pipes;
    position: number;
  },
  pipe2: {
    piece: keyof typeof pipes;
    position: number;
  },
  rowLength: number
) {
  const pipe1Directions = pipes[pipe1.piece];
  const pipe2Directions = pipes[pipe2.piece];

  // If I have | and J, I know these two can connect at |'s south point. That's what's being returned here.
  const possibleConnectionDirections = pipe1Directions.filter((direction) => {
    return pipe2Directions.some((dir) => dir === opposites[direction]);
  });

  if (!possibleConnectionDirections) return false;

  return possibleConnectionDirections.some((direction) => {
    const formula = directionLookup[direction]
      .replace("i", pipe1.position)
      .replace("l", rowLength);
    const necessaryIndex = eval(formula);
    return necessaryIndex === pipe2.position;
  });
  /* 
		| doesn't connect to -. But how do I know that?

		VALID
		|.
		L.

		INVALID
		L.
		|.

		What fundamental truth am I intuiting here?
		Each pipe has two ends. The ends have to match up. But how can I tell that?
		| has a north end and a south end. For it to line up to L, |'s south end has to touch L's north end. But how can I tell whether or not that's the case?
		Is it as simple as "south has to touch north and vice versa". Is that it? Like, I see a |. I have to look up and down.

		What's the difference between "this shape HAS a south" and "this shape HAS a south and it's below me". I guess just where we find it. If it's i + l, it's below you?
	*/
}

function walkPipes(input: string) {}

// How do we know something is a loop? Well...each member of the loop has connections at each point where it "requests" one.
// If this is ever NOT true, no loop.

console.log(
  pipesConnect({ piece: "7", position: 0 }, { piece: "-", position: -1 }, 2)
);
