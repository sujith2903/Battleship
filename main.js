/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ "./src/ship.js");
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameboard */ "./src/gameboard.js");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./player */ "./src/player.js");




const dom = (function () {

    const carrier = document.querySelector('.carrier-name')
    const battleship = document.querySelector('.battleship-name')
    const cruiser = document.querySelector('.cruiser-name')
    const submarine = document.querySelector('.submarine-name')
    const destroyer = document.querySelector('.destroyer-name')
    const playerBoard = document.querySelector('.player-board')
    const computerBoard = document.querySelector('.computer-board')
    
    function hideDisplay(element) {
        element.classList.remove("show")
        element.classList.add("hide")
    }

    function showDisplay(element) {
        element.classList.remove("hide")
        element.classList.add("show")
    }

    function createGameBoards() {
        
        let board = (0,_gameboard__WEBPACK_IMPORTED_MODULE_1__["default"])().createBoard()

        for (let i = 0; i < board.length; i++){
            let grid = document.createElement('div')
            grid.classList.add(i)
            grid.classList.add('grid')
            grid.classList.add('player-board')
            playerBoard.appendChild(grid)
        }
        for (let i = 0; i < board.length; i++){
            let grid = document.createElement('div')
            grid.classList.add(i)
            grid.classList.add('grid')
            grid.classList.add('computer-board')
            computerBoard.appendChild(grid)
        }
    }

    return {
        hideDisplay,
        showDisplay,
        createGameBoards
    }
})()

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dom);

/***/ }),

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ "./src/ship.js");

const gameBoard = function () {
    
    let board = []
    let missedAttack = []
    let attackedPosition = []
    let shipPosition = []
    let ships = []

    function createCoordinate(coordinates, name) {
        return {coordinates,name}
    }

    function indexFinder(pos1, pos2) {
        let index = pos1 * 10 + pos2;
        return index
    }

    function createBoard() {
        for (let i = 0; i < 10; i++){
            for (let j = 0; j < 10; j++){
                let newCoordinates = createCoordinate()
                newCoordinates.coordinates = [i, j]
                newCoordinates.name = null
                board.push(newCoordinates)
            }
        }
        return board
    }

    function placeShip(pos1, pos2, ship, direction) {
        
        if (direction == 'Horizontal') {
            if (pos1 + ship.length > 9) {
                return false
            }

            let index = indexFinder(pos1, pos2)
            
            for (let i = 0; i < ship.length; i++){
                board[index + i].name = ship.shipName
                shipPosition.push(index + i)
            }
        }
        
        if (direction == 'Vertical') {
            if (pos2 + ship.length > 9) {
                return false
            }

            let index = indexFinder(pos1, pos2)

             for (let i = 0; i < ship.length; i++){
                 board[index + i * 10].name = ship.shipName
                 shipPosition.push(index + i * 10)
            }
        }
        ships.push(ship)
    }

    function receiveAttack(pos1, pos2) {
        
        let index = indexFinder(pos1, pos2)

        if (board[index].name != null) {
            attackedPosition.push(index)
            findShip(board[index].name).hit()
        } else {
            missedAttack.push(index)
        }
        return index
    }

    function findShip(name) {
        for (let i = 0; i < ships.length; i++){
            if (ships[i].shipName == name) {
                return ships[i]
            }
        }
    }

    function isAllSunk() {
        if (shipPosition.length == attackedPosition.length) {
            return true
        }
    }

    function getBoard() {
        return board
    }

    function getMissedPositions() {
        return missedAttack
    }

    function getShipsPositions() {
        return shipPosition
    }

    function getAttackedPositions() {
        return attackedPosition
    }
    return {
        createBoard,
        getBoard,
        placeShip,
        receiveAttack,
        isAllSunk,
        getMissedPositions,
        getAttackedPositions,
        getShipsPositions,
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (gameBoard);

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ "./src/ship.js");
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameboard */ "./src/gameboard.js");



const player = function () {

    let board = (0,_gameboard__WEBPACK_IMPORTED_MODULE_1__["default"])()
    let carrier = (0,_ship__WEBPACK_IMPORTED_MODULE_0__["default"])(5, 'Carrier')
    let battleship = (0,_ship__WEBPACK_IMPORTED_MODULE_0__["default"])(4, 'Battleship')
    let cruiser = (0,_ship__WEBPACK_IMPORTED_MODULE_0__["default"])(3, 'Cruiser')
    let submarine = (0,_ship__WEBPACK_IMPORTED_MODULE_0__["default"])(3, 'Submarine')
    let destroyer = (0,_ship__WEBPACK_IMPORTED_MODULE_0__["default"])(2, 'Destroyer')
    let ships = [carrier, battleship, cruiser, submarine, destroyer]
    let shotCoordinates = []

    function randomAttack() {
        let x = Math.floor(Math.random() * 10)
        let y = Math.floor(Math.random() * 10)

        return [x,y]
    }

    function getBoard() {
        return board
    }

    function getShips() {
        return ships
    }

    function getShotCoordinates() {
        return shotCoordinates
    }

    return {
        randomAttack,
        getBoard,
        getShips,
        getShotCoordinates,
        createBoard : board.createBoard,
        getBoard : board.getBoard,
        placeShip : board.placeShip,
        receiveAttack : board.receiveAttack,
        isAllSunk : board.isAllSunk,
        getMissedPositions: board.getMissedPositions,
        getAttackedPositions : board.getAttackedPositions,
        getShipsPositions : board.getShipsPositions
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (player);

/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const ship = function (length, name) {
    
    let hits = 0;
    let sunk = false;
    let shipName = name

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
        length,
        shipName
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ship);



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ "./src/dom.js");
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ship */ "./src/ship.js");
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gameboard */ "./src/gameboard.js");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./player */ "./src/player.js");





let gamer = (0,_player__WEBPACK_IMPORTED_MODULE_3__["default"])()
let computer = (0,_player__WEBPACK_IMPORTED_MODULE_3__["default"])()

_dom__WEBPACK_IMPORTED_MODULE_0__["default"].createGameBoards()
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9kb20uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zaGlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzaGlwIGZyb20gXCIuL3NoaXBcIjtcbmltcG9ydCBnYW1lQm9hcmQgZnJvbSBcIi4vZ2FtZWJvYXJkXCI7XG5pbXBvcnQgcGxheWVyIGZyb20gXCIuL3BsYXllclwiO1xuXG5jb25zdCBkb20gPSAoZnVuY3Rpb24gKCkge1xuXG4gICAgY29uc3QgY2FycmllciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJyaWVyLW5hbWUnKVxuICAgIGNvbnN0IGJhdHRsZXNoaXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYmF0dGxlc2hpcC1uYW1lJylcbiAgICBjb25zdCBjcnVpc2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNydWlzZXItbmFtZScpXG4gICAgY29uc3Qgc3VibWFyaW5lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN1Ym1hcmluZS1uYW1lJylcbiAgICBjb25zdCBkZXN0cm95ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGVzdHJveWVyLW5hbWUnKVxuICAgIGNvbnN0IHBsYXllckJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXllci1ib2FyZCcpXG4gICAgY29uc3QgY29tcHV0ZXJCb2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb21wdXRlci1ib2FyZCcpXG4gICAgXG4gICAgZnVuY3Rpb24gaGlkZURpc3BsYXkoZWxlbWVudCkge1xuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJzaG93XCIpXG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImhpZGVcIilcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzaG93RGlzcGxheShlbGVtZW50KSB7XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIilcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwic2hvd1wiKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZUdhbWVCb2FyZHMoKSB7XG4gICAgICAgIFxuICAgICAgICBsZXQgYm9hcmQgPSBnYW1lQm9hcmQoKS5jcmVhdGVCb2FyZCgpXG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBib2FyZC5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICBsZXQgZ3JpZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgICAgICBncmlkLmNsYXNzTGlzdC5hZGQoaSlcbiAgICAgICAgICAgIGdyaWQuY2xhc3NMaXN0LmFkZCgnZ3JpZCcpXG4gICAgICAgICAgICBncmlkLmNsYXNzTGlzdC5hZGQoJ3BsYXllci1ib2FyZCcpXG4gICAgICAgICAgICBwbGF5ZXJCb2FyZC5hcHBlbmRDaGlsZChncmlkKVxuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYm9hcmQubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgbGV0IGdyaWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICAgICAgZ3JpZC5jbGFzc0xpc3QuYWRkKGkpXG4gICAgICAgICAgICBncmlkLmNsYXNzTGlzdC5hZGQoJ2dyaWQnKVxuICAgICAgICAgICAgZ3JpZC5jbGFzc0xpc3QuYWRkKCdjb21wdXRlci1ib2FyZCcpXG4gICAgICAgICAgICBjb21wdXRlckJvYXJkLmFwcGVuZENoaWxkKGdyaWQpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBoaWRlRGlzcGxheSxcbiAgICAgICAgc2hvd0Rpc3BsYXksXG4gICAgICAgIGNyZWF0ZUdhbWVCb2FyZHNcbiAgICB9XG59KSgpXG5cbmV4cG9ydCBkZWZhdWx0IGRvbSIsImltcG9ydCBzaGlwIGZyb20gXCIuL3NoaXBcIlxuY29uc3QgZ2FtZUJvYXJkID0gZnVuY3Rpb24gKCkge1xuICAgIFxuICAgIGxldCBib2FyZCA9IFtdXG4gICAgbGV0IG1pc3NlZEF0dGFjayA9IFtdXG4gICAgbGV0IGF0dGFja2VkUG9zaXRpb24gPSBbXVxuICAgIGxldCBzaGlwUG9zaXRpb24gPSBbXVxuICAgIGxldCBzaGlwcyA9IFtdXG5cbiAgICBmdW5jdGlvbiBjcmVhdGVDb29yZGluYXRlKGNvb3JkaW5hdGVzLCBuYW1lKSB7XG4gICAgICAgIHJldHVybiB7Y29vcmRpbmF0ZXMsbmFtZX1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbmRleEZpbmRlcihwb3MxLCBwb3MyKSB7XG4gICAgICAgIGxldCBpbmRleCA9IHBvczEgKiAxMCArIHBvczI7XG4gICAgICAgIHJldHVybiBpbmRleFxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZUJvYXJkKCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspe1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaisrKXtcbiAgICAgICAgICAgICAgICBsZXQgbmV3Q29vcmRpbmF0ZXMgPSBjcmVhdGVDb29yZGluYXRlKClcbiAgICAgICAgICAgICAgICBuZXdDb29yZGluYXRlcy5jb29yZGluYXRlcyA9IFtpLCBqXVxuICAgICAgICAgICAgICAgIG5ld0Nvb3JkaW5hdGVzLm5hbWUgPSBudWxsXG4gICAgICAgICAgICAgICAgYm9hcmQucHVzaChuZXdDb29yZGluYXRlcylcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYm9hcmRcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwbGFjZVNoaXAocG9zMSwgcG9zMiwgc2hpcCwgZGlyZWN0aW9uKSB7XG4gICAgICAgIFxuICAgICAgICBpZiAoZGlyZWN0aW9uID09ICdIb3Jpem9udGFsJykge1xuICAgICAgICAgICAgaWYgKHBvczEgKyBzaGlwLmxlbmd0aCA+IDkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGV0IGluZGV4ID0gaW5kZXhGaW5kZXIocG9zMSwgcG9zMilcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgICAgICBib2FyZFtpbmRleCArIGldLm5hbWUgPSBzaGlwLnNoaXBOYW1lXG4gICAgICAgICAgICAgICAgc2hpcFBvc2l0aW9uLnB1c2goaW5kZXggKyBpKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpZiAoZGlyZWN0aW9uID09ICdWZXJ0aWNhbCcpIHtcbiAgICAgICAgICAgIGlmIChwb3MyICsgc2hpcC5sZW5ndGggPiA5KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGxldCBpbmRleCA9IGluZGV4RmluZGVyKHBvczEsIHBvczIpXG5cbiAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgICAgICBib2FyZFtpbmRleCArIGkgKiAxMF0ubmFtZSA9IHNoaXAuc2hpcE5hbWVcbiAgICAgICAgICAgICAgICAgc2hpcFBvc2l0aW9uLnB1c2goaW5kZXggKyBpICogMTApXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgc2hpcHMucHVzaChzaGlwKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlY2VpdmVBdHRhY2socG9zMSwgcG9zMikge1xuICAgICAgICBcbiAgICAgICAgbGV0IGluZGV4ID0gaW5kZXhGaW5kZXIocG9zMSwgcG9zMilcblxuICAgICAgICBpZiAoYm9hcmRbaW5kZXhdLm5hbWUgIT0gbnVsbCkge1xuICAgICAgICAgICAgYXR0YWNrZWRQb3NpdGlvbi5wdXNoKGluZGV4KVxuICAgICAgICAgICAgZmluZFNoaXAoYm9hcmRbaW5kZXhdLm5hbWUpLmhpdCgpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtaXNzZWRBdHRhY2sucHVzaChpbmRleClcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaW5kZXhcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBmaW5kU2hpcChuYW1lKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcHMubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgaWYgKHNoaXBzW2ldLnNoaXBOYW1lID09IG5hbWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc2hpcHNbaV1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGlzQWxsU3VuaygpIHtcbiAgICAgICAgaWYgKHNoaXBQb3NpdGlvbi5sZW5ndGggPT0gYXR0YWNrZWRQb3NpdGlvbi5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRCb2FyZCgpIHtcbiAgICAgICAgcmV0dXJuIGJvYXJkXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0TWlzc2VkUG9zaXRpb25zKCkge1xuICAgICAgICByZXR1cm4gbWlzc2VkQXR0YWNrXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0U2hpcHNQb3NpdGlvbnMoKSB7XG4gICAgICAgIHJldHVybiBzaGlwUG9zaXRpb25cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRBdHRhY2tlZFBvc2l0aW9ucygpIHtcbiAgICAgICAgcmV0dXJuIGF0dGFja2VkUG9zaXRpb25cbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgY3JlYXRlQm9hcmQsXG4gICAgICAgIGdldEJvYXJkLFxuICAgICAgICBwbGFjZVNoaXAsXG4gICAgICAgIHJlY2VpdmVBdHRhY2ssXG4gICAgICAgIGlzQWxsU3VuayxcbiAgICAgICAgZ2V0TWlzc2VkUG9zaXRpb25zLFxuICAgICAgICBnZXRBdHRhY2tlZFBvc2l0aW9ucyxcbiAgICAgICAgZ2V0U2hpcHNQb3NpdGlvbnMsXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBnYW1lQm9hcmQiLCJpbXBvcnQgc2hpcCBmcm9tIFwiLi9zaGlwXCI7XG5pbXBvcnQgZ2FtZUJvYXJkIGZyb20gXCIuL2dhbWVib2FyZFwiO1xuXG5jb25zdCBwbGF5ZXIgPSBmdW5jdGlvbiAoKSB7XG5cbiAgICBsZXQgYm9hcmQgPSBnYW1lQm9hcmQoKVxuICAgIGxldCBjYXJyaWVyID0gc2hpcCg1LCAnQ2FycmllcicpXG4gICAgbGV0IGJhdHRsZXNoaXAgPSBzaGlwKDQsICdCYXR0bGVzaGlwJylcbiAgICBsZXQgY3J1aXNlciA9IHNoaXAoMywgJ0NydWlzZXInKVxuICAgIGxldCBzdWJtYXJpbmUgPSBzaGlwKDMsICdTdWJtYXJpbmUnKVxuICAgIGxldCBkZXN0cm95ZXIgPSBzaGlwKDIsICdEZXN0cm95ZXInKVxuICAgIGxldCBzaGlwcyA9IFtjYXJyaWVyLCBiYXR0bGVzaGlwLCBjcnVpc2VyLCBzdWJtYXJpbmUsIGRlc3Ryb3llcl1cbiAgICBsZXQgc2hvdENvb3JkaW5hdGVzID0gW11cblxuICAgIGZ1bmN0aW9uIHJhbmRvbUF0dGFjaygpIHtcbiAgICAgICAgbGV0IHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMClcbiAgICAgICAgbGV0IHkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMClcblxuICAgICAgICByZXR1cm4gW3gseV1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRCb2FyZCgpIHtcbiAgICAgICAgcmV0dXJuIGJvYXJkXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0U2hpcHMoKSB7XG4gICAgICAgIHJldHVybiBzaGlwc1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldFNob3RDb29yZGluYXRlcygpIHtcbiAgICAgICAgcmV0dXJuIHNob3RDb29yZGluYXRlc1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIHJhbmRvbUF0dGFjayxcbiAgICAgICAgZ2V0Qm9hcmQsXG4gICAgICAgIGdldFNoaXBzLFxuICAgICAgICBnZXRTaG90Q29vcmRpbmF0ZXMsXG4gICAgICAgIGNyZWF0ZUJvYXJkIDogYm9hcmQuY3JlYXRlQm9hcmQsXG4gICAgICAgIGdldEJvYXJkIDogYm9hcmQuZ2V0Qm9hcmQsXG4gICAgICAgIHBsYWNlU2hpcCA6IGJvYXJkLnBsYWNlU2hpcCxcbiAgICAgICAgcmVjZWl2ZUF0dGFjayA6IGJvYXJkLnJlY2VpdmVBdHRhY2ssXG4gICAgICAgIGlzQWxsU3VuayA6IGJvYXJkLmlzQWxsU3VuayxcbiAgICAgICAgZ2V0TWlzc2VkUG9zaXRpb25zOiBib2FyZC5nZXRNaXNzZWRQb3NpdGlvbnMsXG4gICAgICAgIGdldEF0dGFja2VkUG9zaXRpb25zIDogYm9hcmQuZ2V0QXR0YWNrZWRQb3NpdGlvbnMsXG4gICAgICAgIGdldFNoaXBzUG9zaXRpb25zIDogYm9hcmQuZ2V0U2hpcHNQb3NpdGlvbnNcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHBsYXllciIsImNvbnN0IHNoaXAgPSBmdW5jdGlvbiAobGVuZ3RoLCBuYW1lKSB7XG4gICAgXG4gICAgbGV0IGhpdHMgPSAwO1xuICAgIGxldCBzdW5rID0gZmFsc2U7XG4gICAgbGV0IHNoaXBOYW1lID0gbmFtZVxuXG4gICAgZnVuY3Rpb24gaGl0KCkge1xuICAgICAgICBoaXRzICs9IDE7XG4gICAgICAgIHJldHVybiBoaXRzXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaXNTdW5rKCkge1xuXG4gICAgICAgIGlmIChoaXRzID09IGxlbmd0aCkge1xuICAgICAgICAgICAgc3VuayA9IHRydWVcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc3Vua1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldEhpdHMoKSB7XG4gICAgICAgIHJldHVybiBoaXRzXG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgaGl0LFxuICAgICAgICBnZXRIaXRzLFxuICAgICAgICBpc1N1bmssXG4gICAgICAgIGxlbmd0aCxcbiAgICAgICAgc2hpcE5hbWVcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHNoaXBcblxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgZG9tIGZyb20gJy4vZG9tJ1xuaW1wb3J0IHNoaXAgZnJvbSBcIi4vc2hpcFwiO1xuaW1wb3J0IGdhbWVCb2FyZCBmcm9tIFwiLi9nYW1lYm9hcmRcIjtcbmltcG9ydCBwbGF5ZXIgZnJvbSBcIi4vcGxheWVyXCI7XG5cbmxldCBnYW1lciA9IHBsYXllcigpXG5sZXQgY29tcHV0ZXIgPSBwbGF5ZXIoKVxuXG5kb20uY3JlYXRlR2FtZUJvYXJkcygpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9