(()=>{"use strict";const e=function(e,t){let r=0,n=!1;return{hit:function(){return r+=1,r},getHits:function(){return r},isSunk:function(){return r==e&&(n=!0),n},length:e,shipName:t}},t=function(){let t=function(){let e=[],t=[],r=[],n=[],i=[];function o(e,t){return 10*e+t}function a(e,t,r,n){return!("Horizontal"==n&&t+r.length>10||"Vertical"==n&&e+r.length>10)}return{createBoard:function(){for(let t=0;t<10;t++)for(let r=0;r<10;r++){let n={coordinates:void 0,name:void 0};n.coordinates=[t,r],n.name=null,e.push(n)}return e},getBoard:function(){return e},checkValidity:a,placeShip:function(t,r,s,c){if("Horizontal"==c&&a(t,r,s,c)){let a=o(t,r);for(let t=0;t<s.length;t++)e[a+t].name=s.shipName,n.includes(a+t)||(n.push(a+t),console.log(n)),i.push(s)}if("Vertical"==c&&a(t,r,s,c)){let a=o(t,r);for(let t=0;t<s.length;t++)e[a+10*t].name=s.shipName,n.includes(a+t)||(n.push(a+10*t),console.log(n));i.push(s)}},receiveAttack:function(n,a){let s=o(n,a);return null!=e[s].name?(r.push(s),function(e){for(let t=0;t<i.length;t++)if(i[t].shipName==e)return i[t]}(e[s].name).hit()):t.push(s),s},isAllSunk:function(){if(n.length==r.length)return!0},getMissedPositions:function(){return t},getAttackedPositions:function(){return r},getShipsPositions:function(){return n}}}(),r=[e(5,"Carrier"),e(4,"Battleship"),e(3,"Cruiser"),e(3,"Submarine"),e(2,"Destroyer")],n=[];return{randomAttack:function(){return[Math.floor(10*Math.random()),Math.floor(10*Math.random())]},getBoard:function(){return t},getShips:function(){return r},getShotCoordinates:function(){return n},createBoard:t.createBoard,getBoard:t.getBoard,placeShip:t.placeShip,checkValidity:t.checkValidity,receiveAttack:t.receiveAttack,isAllSunk:t.isAllSunk,getMissedPositions:t.getMissedPositions,getAttackedPositions:t.getAttackedPositions,getShipsPositions:t.getShipsPositions}},r=function(){let e=t(),r=t();e.createBoard(),r.createBoard();let n=e.getBoard(),i=r.getBoard(),o=e.getShips(),a=r.getShips();return{gamer:e,computer:r,getGamerBoard:function(){return n},getComputerBoard:function(){return i},getGamerShips:function(){return o},getComputerShips:function(){return a}}}();(function(){document.querySelector(".carrier-name"),document.querySelector(".battleship-name"),document.querySelector(".cruiser-name"),document.querySelector(".submarine-name"),document.querySelector(".destroyer-name");const e=document.querySelector(".player-board"),t=document.querySelector(".computer-board"),n=document.querySelector(".direction");let i=r.getGamerBoard(),o=r.getComputerBoard(),a=[...r.getGamerShips()];function s(e){let t=e.classList[1].split(",");return[parseInt(t[0]),parseInt(t[1])]}return r.getComputerShips(),function(){let t,o,c=a[0];e.addEventListener("click",(e=>{if(e.target.classList.contains("player-board")){let l=e.target;t=s(l)[0],o=s(l)[1],a.length>0&&(r.gamer.placeShip(t,o,c,n.value),a.shift(),c=a[0],console.log(i))}})),e.addEventListener("mouseover",(e=>{if(e.target.classList.contains("grid")){let i=e.target;t=s(i)[0],o=s(i)[1],a.length>0&&r.gamer.checkValidity(t,o,c,n.value)?i.classList.add("green"):a.length>0&&i.classList.add("red")}})),e.addEventListener("mouseout",(e=>{if(e.target.classList.contains("grid")){(t=e.target).classList.remove("green"),t.classList.remove("red")}var t}))}(),n.addEventListener("click",(()=>{"Horizontal"==n.value?(n.value="Vertical",n.textContent="Set Horizontal"):(n.value="Horizontal",n.textContent="Set Vertical")})),{hideDisplay:function(e){e.classList.remove("show"),e.classList.add("hide")},showDisplay:function(e){e.classList.remove("hide"),e.classList.add("show")},createGameBoards:function(){for(let t=0;t<i.length;t++){let r=document.createElement("div");r.classList.add(t),r.classList.add(i[t].coordinates),r.classList.add("grid"),r.classList.add("player-board"),e.appendChild(r)}for(let e=0;e<o.length;e++){let r=document.createElement("div");r.classList.add(e),r.classList.add(o[e].coordinates),r.classList.add("grid"),r.classList.add("computer-board"),t.appendChild(r)}}}})().createGameBoards()})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VUFBVVMsSUFBSSxrQkFDbkJiLEVBQWlCc0IsWUFBWWIsRUFDL0IsQ0FDRixFQXNGRCxFQWhJVyxHQ0NSVyxrQiIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2hpcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3BsYXllci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2dhbWUuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9kb20uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBzaGlwID0gZnVuY3Rpb24gKGxlbmd0aCwgbmFtZSkge1xuICBsZXQgaGl0cyA9IDA7XG4gIGxldCBzdW5rID0gZmFsc2U7XG4gIGxldCBzaGlwTmFtZSA9IG5hbWU7XG5cbiAgZnVuY3Rpb24gaGl0KCkge1xuICAgIGhpdHMgKz0gMTtcbiAgICByZXR1cm4gaGl0cztcbiAgfVxuXG4gIGZ1bmN0aW9uIGlzU3VuaygpIHtcbiAgICBpZiAoaGl0cyA9PSBsZW5ndGgpIHtcbiAgICAgIHN1bmsgPSB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gc3VuaztcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldEhpdHMoKSB7XG4gICAgcmV0dXJuIGhpdHM7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGhpdCxcbiAgICBnZXRIaXRzLFxuICAgIGlzU3VuayxcbiAgICBsZW5ndGgsXG4gICAgc2hpcE5hbWUsXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBzaGlwO1xuIiwiaW1wb3J0IHNoaXAgZnJvbSBcIi4vc2hpcFwiO1xuaW1wb3J0IGdhbWVCb2FyZCBmcm9tIFwiLi9nYW1lYm9hcmRcIjtcblxuY29uc3QgcGxheWVyID0gZnVuY3Rpb24gKCkge1xuICBsZXQgYm9hcmQgPSBnYW1lQm9hcmQoKTtcbiAgbGV0IGNhcnJpZXIgPSBzaGlwKDUsIFwiQ2FycmllclwiKTtcbiAgbGV0IGJhdHRsZXNoaXAgPSBzaGlwKDQsIFwiQmF0dGxlc2hpcFwiKTtcbiAgbGV0IGNydWlzZXIgPSBzaGlwKDMsIFwiQ3J1aXNlclwiKTtcbiAgbGV0IHN1Ym1hcmluZSA9IHNoaXAoMywgXCJTdWJtYXJpbmVcIik7XG4gIGxldCBkZXN0cm95ZXIgPSBzaGlwKDIsIFwiRGVzdHJveWVyXCIpO1xuICBsZXQgc2hpcHMgPSBbY2FycmllciwgYmF0dGxlc2hpcCwgY3J1aXNlciwgc3VibWFyaW5lLCBkZXN0cm95ZXJdO1xuICBsZXQgc2hvdENvb3JkaW5hdGVzID0gW107XG5cbiAgZnVuY3Rpb24gcmFuZG9tQXR0YWNrKCkge1xuICAgIGxldCB4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgIGxldCB5ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuXG4gICAgcmV0dXJuIFt4LCB5XTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldEJvYXJkKCkge1xuICAgIHJldHVybiBib2FyZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldFNoaXBzKCkge1xuICAgIHJldHVybiBzaGlwcztcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldFNob3RDb29yZGluYXRlcygpIHtcbiAgICByZXR1cm4gc2hvdENvb3JkaW5hdGVzO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICByYW5kb21BdHRhY2ssXG4gICAgZ2V0Qm9hcmQsXG4gICAgZ2V0U2hpcHMsXG4gICAgZ2V0U2hvdENvb3JkaW5hdGVzLFxuICAgIGNyZWF0ZUJvYXJkOiBib2FyZC5jcmVhdGVCb2FyZCxcbiAgICBnZXRCb2FyZDogYm9hcmQuZ2V0Qm9hcmQsXG4gICAgcGxhY2VTaGlwOiBib2FyZC5wbGFjZVNoaXAsXG4gICAgY2hlY2tWYWxpZGl0eTogYm9hcmQuY2hlY2tWYWxpZGl0eSxcbiAgICByZWNlaXZlQXR0YWNrOiBib2FyZC5yZWNlaXZlQXR0YWNrLFxuICAgIGlzQWxsU3VuazogYm9hcmQuaXNBbGxTdW5rLFxuICAgIGdldE1pc3NlZFBvc2l0aW9uczogYm9hcmQuZ2V0TWlzc2VkUG9zaXRpb25zLFxuICAgIGdldEF0dGFja2VkUG9zaXRpb25zOiBib2FyZC5nZXRBdHRhY2tlZFBvc2l0aW9ucyxcbiAgICBnZXRTaGlwc1Bvc2l0aW9uczogYm9hcmQuZ2V0U2hpcHNQb3NpdGlvbnMsXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBwbGF5ZXI7XG4iLCJpbXBvcnQgc2hpcCBmcm9tIFwiLi9zaGlwXCI7XG5jb25zdCBnYW1lQm9hcmQgPSBmdW5jdGlvbiAoKSB7XG4gIGxldCBib2FyZCA9IFtdO1xuICBsZXQgbWlzc2VkQXR0YWNrID0gW107XG4gIGxldCBhdHRhY2tlZFBvc2l0aW9uID0gW107XG4gIGxldCBzaGlwUG9zaXRpb24gPSBbXTtcbiAgbGV0IHNoaXBzID0gW107XG5cbiAgZnVuY3Rpb24gY3JlYXRlQ29vcmRpbmF0ZShjb29yZGluYXRlcywgbmFtZSkge1xuICAgIHJldHVybiB7IGNvb3JkaW5hdGVzLCBuYW1lIH07XG4gIH1cblxuICBmdW5jdGlvbiBpbmRleEZpbmRlcihwb3MxLCBwb3MyKSB7XG4gICAgbGV0IGluZGV4ID0gcG9zMSAqIDEwICsgcG9zMjtcbiAgICByZXR1cm4gaW5kZXg7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVCb2FyZCgpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGorKykge1xuICAgICAgICBsZXQgbmV3Q29vcmRpbmF0ZXMgPSBjcmVhdGVDb29yZGluYXRlKCk7XG4gICAgICAgIG5ld0Nvb3JkaW5hdGVzLmNvb3JkaW5hdGVzID0gW2ksIGpdO1xuICAgICAgICBuZXdDb29yZGluYXRlcy5uYW1lID0gbnVsbDtcbiAgICAgICAgYm9hcmQucHVzaChuZXdDb29yZGluYXRlcyk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBib2FyZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNoZWNrVmFsaWRpdHkocG9zMSwgcG9zMiwgc2hpcCwgZGlyZWN0aW9uKSB7XG4gICAgaWYgKGRpcmVjdGlvbiA9PSBcIkhvcml6b250YWxcIiAmJiBwb3MyICsgc2hpcC5sZW5ndGggPiAxMCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGlmIChkaXJlY3Rpb24gPT0gXCJWZXJ0aWNhbFwiICYmIHBvczEgKyBzaGlwLmxlbmd0aCA+IDEwKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgZnVuY3Rpb24gcGxhY2VTaGlwKHBvczEsIHBvczIsIHNoaXAsIGRpcmVjdGlvbikge1xuICAgIGlmIChcbiAgICAgIGRpcmVjdGlvbiA9PSBcIkhvcml6b250YWxcIiAmJlxuICAgICAgY2hlY2tWYWxpZGl0eShwb3MxLCBwb3MyLCBzaGlwLCBkaXJlY3Rpb24pXG4gICAgKSB7XG4gICAgICBsZXQgaW5kZXggPSBpbmRleEZpbmRlcihwb3MxLCBwb3MyKTtcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGJvYXJkW2luZGV4ICsgaV0ubmFtZSA9IHNoaXAuc2hpcE5hbWU7XG4gICAgICAgIGlmICghc2hpcFBvc2l0aW9uLmluY2x1ZGVzKGluZGV4ICsgaSkpIHtcbiAgICAgICAgICBzaGlwUG9zaXRpb24ucHVzaChpbmRleCArIGkpO1xuICAgICAgICAgIGNvbnNvbGUubG9nKHNoaXBQb3NpdGlvbik7XG4gICAgICAgIH1cbiAgICAgICAgc2hpcHMucHVzaChzaGlwKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoZGlyZWN0aW9uID09IFwiVmVydGljYWxcIiAmJiBjaGVja1ZhbGlkaXR5KHBvczEsIHBvczIsIHNoaXAsIGRpcmVjdGlvbikpIHtcbiAgICAgIGxldCBpbmRleCA9IGluZGV4RmluZGVyKHBvczEsIHBvczIpO1xuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgYm9hcmRbaW5kZXggKyBpICogMTBdLm5hbWUgPSBzaGlwLnNoaXBOYW1lO1xuICAgICAgICBpZiAoIXNoaXBQb3NpdGlvbi5pbmNsdWRlcyhpbmRleCArIGkpKSB7XG4gICAgICAgICAgc2hpcFBvc2l0aW9uLnB1c2goaW5kZXggKyBpICogMTApO1xuICAgICAgICAgIGNvbnNvbGUubG9nKHNoaXBQb3NpdGlvbik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHNoaXBzLnB1c2goc2hpcCk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcmVjZWl2ZUF0dGFjayhwb3MxLCBwb3MyKSB7XG4gICAgbGV0IGluZGV4ID0gaW5kZXhGaW5kZXIocG9zMSwgcG9zMik7XG5cbiAgICBpZiAoYm9hcmRbaW5kZXhdLm5hbWUgIT0gbnVsbCkge1xuICAgICAgYXR0YWNrZWRQb3NpdGlvbi5wdXNoKGluZGV4KTtcbiAgICAgIGZpbmRTaGlwKGJvYXJkW2luZGV4XS5uYW1lKS5oaXQoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbWlzc2VkQXR0YWNrLnB1c2goaW5kZXgpO1xuICAgIH1cbiAgICByZXR1cm4gaW5kZXg7XG4gIH1cblxuICBmdW5jdGlvbiBmaW5kU2hpcChuYW1lKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwcy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHNoaXBzW2ldLnNoaXBOYW1lID09IG5hbWUpIHtcbiAgICAgICAgcmV0dXJuIHNoaXBzW2ldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGlzQWxsU3VuaygpIHtcbiAgICBpZiAoc2hpcFBvc2l0aW9uLmxlbmd0aCA9PSBhdHRhY2tlZFBvc2l0aW9uLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZ2V0Qm9hcmQoKSB7XG4gICAgcmV0dXJuIGJvYXJkO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0TWlzc2VkUG9zaXRpb25zKCkge1xuICAgIHJldHVybiBtaXNzZWRBdHRhY2s7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRTaGlwc1Bvc2l0aW9ucygpIHtcbiAgICByZXR1cm4gc2hpcFBvc2l0aW9uO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0QXR0YWNrZWRQb3NpdGlvbnMoKSB7XG4gICAgcmV0dXJuIGF0dGFja2VkUG9zaXRpb247XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBjcmVhdGVCb2FyZCxcbiAgICBnZXRCb2FyZCxcbiAgICBjaGVja1ZhbGlkaXR5LFxuICAgIHBsYWNlU2hpcCxcbiAgICByZWNlaXZlQXR0YWNrLFxuICAgIGlzQWxsU3VuayxcbiAgICBnZXRNaXNzZWRQb3NpdGlvbnMsXG4gICAgZ2V0QXR0YWNrZWRQb3NpdGlvbnMsXG4gICAgZ2V0U2hpcHNQb3NpdGlvbnMsXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBnYW1lQm9hcmQ7XG4iLCJpbXBvcnQgc2hpcCBmcm9tIFwiLi9zaGlwXCI7XG5pbXBvcnQgZ2FtZUJvYXJkIGZyb20gXCIuL2dhbWVib2FyZFwiO1xuaW1wb3J0IHBsYXllciBmcm9tIFwiLi9wbGF5ZXJcIjtcblxuY29uc3QgZ2FtZSA9IChmdW5jdGlvbiAoKSB7XG4gIGxldCBnYW1lciA9IHBsYXllcigpO1xuICBsZXQgY29tcHV0ZXIgPSBwbGF5ZXIoKTtcblxuICBnYW1lci5jcmVhdGVCb2FyZCgpO1xuICBjb21wdXRlci5jcmVhdGVCb2FyZCgpO1xuXG4gIGxldCBnYW1lckJvYXJkID0gZ2FtZXIuZ2V0Qm9hcmQoKTtcbiAgbGV0IGNvbXB1dGVyQm9hcmQgPSBjb21wdXRlci5nZXRCb2FyZCgpO1xuICBsZXQgZ2FtZXJTaGlwcyA9IGdhbWVyLmdldFNoaXBzKCk7XG4gIGxldCBjb21wdXRlclNoaXBzID0gY29tcHV0ZXIuZ2V0U2hpcHMoKTtcblxuICBmdW5jdGlvbiBnZXRHYW1lckJvYXJkKCkge1xuICAgIHJldHVybiBnYW1lckJvYXJkO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0Q29tcHV0ZXJCb2FyZCgpIHtcbiAgICByZXR1cm4gY29tcHV0ZXJCb2FyZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldEdhbWVyU2hpcHMoKSB7XG4gICAgcmV0dXJuIGdhbWVyU2hpcHM7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRDb21wdXRlclNoaXBzKCkge1xuICAgIHJldHVybiBjb21wdXRlclNoaXBzO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBnYW1lcixcbiAgICBjb21wdXRlcixcbiAgICBnZXRHYW1lckJvYXJkLFxuICAgIGdldENvbXB1dGVyQm9hcmQsXG4gICAgZ2V0R2FtZXJTaGlwcyxcbiAgICBnZXRDb21wdXRlclNoaXBzLFxuICB9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgZ2FtZTtcbiIsImltcG9ydCBzaGlwIGZyb20gXCIuL3NoaXBcIjtcbmltcG9ydCBnYW1lQm9hcmQgZnJvbSBcIi4vZ2FtZWJvYXJkXCI7XG5pbXBvcnQgcGxheWVyIGZyb20gXCIuL3BsYXllclwiO1xuaW1wb3J0IGdhbWUgZnJvbSBcIi4vZ2FtZVwiO1xuXG5jb25zdCBkb20gPSAoZnVuY3Rpb24gKCkge1xuICBjb25zdCBjYXJyaWVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYXJyaWVyLW5hbWVcIik7XG4gIGNvbnN0IGJhdHRsZXNoaXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJhdHRsZXNoaXAtbmFtZVwiKTtcbiAgY29uc3QgY3J1aXNlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY3J1aXNlci1uYW1lXCIpO1xuICBjb25zdCBzdWJtYXJpbmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnN1Ym1hcmluZS1uYW1lXCIpO1xuICBjb25zdCBkZXN0cm95ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRlc3Ryb3llci1uYW1lXCIpO1xuICBjb25zdCBwbGF5ZXJCb2FyZERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGxheWVyLWJvYXJkXCIpO1xuICBjb25zdCBjb21wdXRlckJvYXJkRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb21wdXRlci1ib2FyZFwiKTtcbiAgY29uc3QgZGlyZWN0aW9uQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kaXJlY3Rpb25cIik7XG5cbiAgbGV0IGdhbWVyQm9hcmQgPSBnYW1lLmdldEdhbWVyQm9hcmQoKTtcbiAgbGV0IGNvbXB1dGVyQm9hcmQgPSBnYW1lLmdldENvbXB1dGVyQm9hcmQoKTtcbiAgbGV0IGdhbWVyU2hpcHMgPSBbLi4uZ2FtZS5nZXRHYW1lclNoaXBzKCldO1xuICBsZXQgY29tcHV0ZXJTaGlwcyA9IFsuLi5nYW1lLmdldENvbXB1dGVyU2hpcHMoKV07XG5cbiAgZnVuY3Rpb24gaGlkZURpc3BsYXkoZWxlbWVudCkge1xuICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcInNob3dcIik7XG4gICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNob3dEaXNwbGF5KGVsZW1lbnQpIHtcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpO1xuICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChcInNob3dcIik7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVHYW1lQm9hcmRzKCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZ2FtZXJCb2FyZC5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IGdyaWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgZ3JpZC5jbGFzc0xpc3QuYWRkKGkpO1xuICAgICAgZ3JpZC5jbGFzc0xpc3QuYWRkKGdhbWVyQm9hcmRbaV0uY29vcmRpbmF0ZXMpO1xuICAgICAgZ3JpZC5jbGFzc0xpc3QuYWRkKFwiZ3JpZFwiKTtcbiAgICAgIGdyaWQuY2xhc3NMaXN0LmFkZChcInBsYXllci1ib2FyZFwiKTtcbiAgICAgIHBsYXllckJvYXJkRGl2LmFwcGVuZENoaWxkKGdyaWQpO1xuICAgIH1cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbXB1dGVyQm9hcmQubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBncmlkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGdyaWQuY2xhc3NMaXN0LmFkZChpKTtcbiAgICAgIGdyaWQuY2xhc3NMaXN0LmFkZChjb21wdXRlckJvYXJkW2ldLmNvb3JkaW5hdGVzKTtcbiAgICAgIGdyaWQuY2xhc3NMaXN0LmFkZChcImdyaWRcIik7XG4gICAgICBncmlkLmNsYXNzTGlzdC5hZGQoXCJjb21wdXRlci1ib2FyZFwiKTtcbiAgICAgIGNvbXB1dGVyQm9hcmREaXYuYXBwZW5kQ2hpbGQoZ3JpZCk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZ2V0Q29vcmRpbmF0ZXModGFyZ2V0KSB7XG4gICAgbGV0IGNvb3JkaW5hdGVzID0gdGFyZ2V0LmNsYXNzTGlzdFsxXS5zcGxpdChcIixcIik7XG4gICAgbGV0IHBvczEgPSBwYXJzZUludChjb29yZGluYXRlc1swXSk7XG4gICAgbGV0IHBvczIgPSBwYXJzZUludChjb29yZGluYXRlc1sxXSk7XG5cbiAgICByZXR1cm4gW3BvczEsIHBvczJdO1xuICB9XG5cbiAgZnVuY3Rpb24gYWRkVmFsaWRpdHlDb2xvcihjZWxsKSB7XG4gICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwiZ3JlZW5cIik7XG4gIH1cblxuICBmdW5jdGlvbiByZW1vdmVWYWxpZGl0eUNvbG9yKGNlbGwpIHtcbiAgICBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoXCJncmVlblwiKTtcbiAgICBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoXCJyZWRcIik7XG4gIH1cblxuICBmdW5jdGlvbiBhZGROb25WYWxpZGl0eUNvbG9yKGNlbGwpIHtcbiAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJyZWRcIik7XG4gIH1cblxuICAoZnVuY3Rpb24gcGxheWVyQm9hcmRFdmVudHMoKSB7XG4gICAgbGV0IGN1cnJlbnRTaGlwID0gZ2FtZXJTaGlwc1swXTtcbiAgICBsZXQgcG9zMTtcbiAgICBsZXQgcG9zMjtcblxuICAgIHBsYXllckJvYXJkRGl2LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZ3JpZCkgPT4ge1xuICAgICAgaWYgKGdyaWQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcInBsYXllci1ib2FyZFwiKSkge1xuICAgICAgICBsZXQgdGFyZ2V0ID0gZ3JpZC50YXJnZXQ7XG4gICAgICAgIHBvczEgPSBnZXRDb29yZGluYXRlcyh0YXJnZXQpWzBdO1xuICAgICAgICBwb3MyID0gZ2V0Q29vcmRpbmF0ZXModGFyZ2V0KVsxXTtcbiAgICAgICAgaWYgKGdhbWVyU2hpcHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGdhbWUuZ2FtZXIucGxhY2VTaGlwKHBvczEsIHBvczIsIGN1cnJlbnRTaGlwLCBkaXJlY3Rpb25CdXR0b24udmFsdWUpO1xuICAgICAgICAgIGdhbWVyU2hpcHMuc2hpZnQoKTtcbiAgICAgICAgICBjdXJyZW50U2hpcCA9IGdhbWVyU2hpcHNbMF07XG4gICAgICAgICAgY29uc29sZS5sb2coZ2FtZXJCb2FyZCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHBsYXllckJvYXJkRGl2LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW92ZXJcIiwgKGdyaWQpID0+IHtcbiAgICAgIGlmIChncmlkLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJncmlkXCIpKSB7XG4gICAgICAgIGxldCB0YXJnZXQgPSBncmlkLnRhcmdldDtcbiAgICAgICAgcG9zMSA9IGdldENvb3JkaW5hdGVzKHRhcmdldClbMF07XG4gICAgICAgIHBvczIgPSBnZXRDb29yZGluYXRlcyh0YXJnZXQpWzFdO1xuICAgICAgICBpZiAoXG4gICAgICAgICAgZ2FtZXJTaGlwcy5sZW5ndGggPiAwICYmXG4gICAgICAgICAgZ2FtZS5nYW1lci5jaGVja1ZhbGlkaXR5KFxuICAgICAgICAgICAgcG9zMSxcbiAgICAgICAgICAgIHBvczIsXG4gICAgICAgICAgICBjdXJyZW50U2hpcCxcbiAgICAgICAgICAgIGRpcmVjdGlvbkJ1dHRvbi52YWx1ZVxuICAgICAgICAgIClcbiAgICAgICAgKSB7XG4gICAgICAgICAgYWRkVmFsaWRpdHlDb2xvcih0YXJnZXQpO1xuICAgICAgICB9IGVsc2UgaWYgKGdhbWVyU2hpcHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGFkZE5vblZhbGlkaXR5Q29sb3IodGFyZ2V0KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcGxheWVyQm9hcmREaXYuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3V0XCIsIChncmlkKSA9PiB7XG4gICAgICBpZiAoZ3JpZC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZ3JpZFwiKSkge1xuICAgICAgICBsZXQgdGFyZ2V0ID0gZ3JpZC50YXJnZXQ7XG4gICAgICAgIHJlbW92ZVZhbGlkaXR5Q29sb3IodGFyZ2V0KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSkoKTtcblxuICBkaXJlY3Rpb25CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBpZiAoZGlyZWN0aW9uQnV0dG9uLnZhbHVlID09IFwiSG9yaXpvbnRhbFwiKSB7XG4gICAgICBkaXJlY3Rpb25CdXR0b24udmFsdWUgPSBcIlZlcnRpY2FsXCI7XG4gICAgICBkaXJlY3Rpb25CdXR0b24udGV4dENvbnRlbnQgPSBcIlNldCBIb3Jpem9udGFsXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRpcmVjdGlvbkJ1dHRvbi52YWx1ZSA9IFwiSG9yaXpvbnRhbFwiO1xuICAgICAgZGlyZWN0aW9uQnV0dG9uLnRleHRDb250ZW50ID0gXCJTZXQgVmVydGljYWxcIjtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiB7XG4gICAgaGlkZURpc3BsYXksXG4gICAgc2hvd0Rpc3BsYXksXG4gICAgY3JlYXRlR2FtZUJvYXJkcyxcbiAgfTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGRvbTtcbiIsImltcG9ydCBkb20gZnJvbSBcIi4vZG9tXCI7XG5pbXBvcnQgc2hpcCBmcm9tIFwiLi9zaGlwXCI7XG5pbXBvcnQgZ2FtZUJvYXJkIGZyb20gXCIuL2dhbWVib2FyZFwiO1xuaW1wb3J0IHBsYXllciBmcm9tIFwiLi9wbGF5ZXJcIjtcbmltcG9ydCBnYW1lIGZyb20gXCIuL2dhbWVcIjtcblxuZG9tLmNyZWF0ZUdhbWVCb2FyZHMoKTtcbiJdLCJuYW1lcyI6WyJsZW5ndGgiLCJuYW1lIiwiaGl0cyIsInN1bmsiLCJoaXQiLCJnZXRIaXRzIiwiaXNTdW5rIiwic2hpcE5hbWUiLCJib2FyZCIsIm1pc3NlZEF0dGFjayIsImF0dGFja2VkUG9zaXRpb24iLCJzaGlwUG9zaXRpb24iLCJzaGlwcyIsImluZGV4RmluZGVyIiwicG9zMSIsInBvczIiLCJjaGVja1ZhbGlkaXR5Iiwic2hpcCIsImRpcmVjdGlvbiIsImNyZWF0ZUJvYXJkIiwiaSIsImoiLCJuZXdDb29yZGluYXRlcyIsImNvb3JkaW5hdGVzIiwiY3JlYXRlQ29vcmRpbmF0ZSIsInB1c2giLCJnZXRCb2FyZCIsInBsYWNlU2hpcCIsImluZGV4IiwiaW5jbHVkZXMiLCJjb25zb2xlIiwibG9nIiwicmVjZWl2ZUF0dGFjayIsImZpbmRTaGlwIiwiaXNBbGxTdW5rIiwiZ2V0TWlzc2VkUG9zaXRpb25zIiwiZ2V0QXR0YWNrZWRQb3NpdGlvbnMiLCJnZXRTaGlwc1Bvc2l0aW9ucyIsInNob3RDb29yZGluYXRlcyIsInJhbmRvbUF0dGFjayIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImdldFNoaXBzIiwiZ2V0U2hvdENvb3JkaW5hdGVzIiwiZ2FtZXIiLCJjb21wdXRlciIsImdhbWVyQm9hcmQiLCJjb21wdXRlckJvYXJkIiwiZ2FtZXJTaGlwcyIsImNvbXB1dGVyU2hpcHMiLCJnZXRHYW1lckJvYXJkIiwiZ2V0Q29tcHV0ZXJCb2FyZCIsImdldEdhbWVyU2hpcHMiLCJnZXRDb21wdXRlclNoaXBzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwicGxheWVyQm9hcmREaXYiLCJjb21wdXRlckJvYXJkRGl2IiwiZGlyZWN0aW9uQnV0dG9uIiwiZ2V0Q29vcmRpbmF0ZXMiLCJ0YXJnZXQiLCJjbGFzc0xpc3QiLCJzcGxpdCIsInBhcnNlSW50IiwiY3VycmVudFNoaXAiLCJhZGRFdmVudExpc3RlbmVyIiwiZ3JpZCIsImNvbnRhaW5zIiwidmFsdWUiLCJzaGlmdCIsImFkZCIsImNlbGwiLCJyZW1vdmUiLCJ0ZXh0Q29udGVudCIsImhpZGVEaXNwbGF5IiwiZWxlbWVudCIsInNob3dEaXNwbGF5IiwiY3JlYXRlR2FtZUJvYXJkcyIsImNyZWF0ZUVsZW1lbnQiLCJhcHBlbmRDaGlsZCJdLCJzb3VyY2VSb290IjoiIn0=