const ship = function (length) {
    
    let hits = 0;
    let sunk = false;

    function hit() {
        hits += 1;
        return hits
    }

    function isSunk() {

        if (hits == length) {
            sunk = true
        }
        return sunk
    }

    function getHits() {
        return hits
    }

    return {
        hit,
        getHits,
        isSunk,
        length
    }
}

export default ship

