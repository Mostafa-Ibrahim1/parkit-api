const makeFloor = (numberOfSlots, floorNumber) => {
  const Alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    .split("")
    .slice(0, numberOfSlots);
  const floor = [];
  var rep = 0;
  var repeatFactor = 1;
  for (let index = 0; index < numberOfSlots; index++) {
    if (rep < Alphabet.length) {
      floor.push(floorNumber + Alphabet[rep].repeat(repeatFactor));
      rep++;
    }
    if (rep >= Alphabet.length && rep <= Alphabet.length * (repeatFactor + 1)) {
      rep = 0;
      repeatFactor++;
    }
  }
  return floor;
};

module.exports = makeFloor;
