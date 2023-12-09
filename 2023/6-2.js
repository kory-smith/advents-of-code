const input = `Time:        47     98     66     98
Distance:   400   1213   1011   1540`;

const testInput = `Time:      7  15   30
Distance:  9  40  200`;

function calculateAnswer(input) {
  const [time, distance] = input.split("\n");

  const timeEntry = Number(time.split(":")[1].replace(/\s+/g, ""));

  const distanceEntry = Number(distance.split(":")[1].replace(/\s+/g, ""));

  return calculatePossibleWinHoldTimes(timeEntry, distanceEntry);
}

function calculatePossibleWinHoldTimes(duration, recordDistance) {
  const winningHoldTimes = [];
  for (let holdTime = 1; duration - holdTime >= 0; holdTime++) {
    const remainingRaceTime = duration - holdTime;
    // Since every second adds a millimeter per ms of speed, speed is equal to holdtime
    const speed = holdTime;
    let distanceTraveled = speed * remainingRaceTime;
    if (distanceTraveled > recordDistance) {
      winningHoldTimes.push(holdTime);
    }
  }
  return winningHoldTimes.length;
}

console.log(calculateAnswer(input));
