const ship = function (length, name) {
  let hits = 0;
  let sunk = false;
  let shipName = name;

  function hit() {
    hits += 1;
    return hits;
  }

  function isSunk() {
    if (hits == length) {
      sunk = true;
    }
    return sunk;
  }

  function getHits() {
    return hits;
  }

  return {
    hit,
    getHits,
    isSunk,
    length,
    shipName,
  };
};

export default ship;
