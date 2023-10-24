(()=>{"use strict";const e=function(e,t){let n=0,r=!1;return{hit:function(){return n+=1,n},getHits:function(){return n},isSunk:function(){return n==e&&(r=!0),r},length:e,shipName:t}},t=function(){let t=function(){let e=[],t=[],n=[],r=[],i=[];function o(e,t){return 10*e+t}function a(e,t,n,i){let a=o(e,t);if("Horizontal"==i)for(let e=0;e<n.length;e++)if(r.includes(a+e))return!1;if("Vertical"==i)for(let e=0;e<n.length;e++)if(r.includes(a+10*e))return!1;return!("Horizontal"==i&&t+n.length>10||"Vertical"==i&&e+n.length>10)}return{createBoard:function(){for(let t=0;t<10;t++)for(let n=0;n<10;n++){let r={coordinates:void 0,name:void 0};r.coordinates=[t,n],r.name=null,e.push(r)}return e},getBoard:function(){return e},checkValidity:a,placeShip:function(t,n,s,l){if("Horizontal"==l&&a(t,n,s,l)){let i=o(t,n);for(let t=0;t<s.length;t++)e[i+t].name=s.shipName,r.push(i+t),console.log(r)}if("Vertical"==l&&a(t,n,s,l)){let i=o(t,n);for(let t=0;t<s.length;t++)e[i+10*t].name=s.shipName,r.push(i+10*t),console.log(r)}i.push(s)},receiveAttack:function(r,a){let s=o(r,a);null!=e[s].name?(n.push(s),function(e){for(let t=0;t<i.length;t++)if(i[t].shipName==e)return i[t]}(e[s].name).hit()):t.push(s)},isAllSunk:function(){if(r.length==n.length)return!0},getMissedPositions:function(){return t},getAttackedPositions:function(){return n},getShipsPositions:function(){return r}}}(),n=[e(5,"Carrier"),e(4,"Battleship"),e(3,"Cruiser"),e(3,"Submarine"),e(2,"Destroyer")],r=[...t.getAttackedPositions(),...t.getMissedPositions()];function i(){return[Math.floor(10*Math.random()),Math.floor(10*Math.random())]}return{randomAttack:i,randomPlacement:function e(n){let r=i(),o=r[0],a=r[1],s="";s=1==Math.floor(2*Math.random())?"Horizontal":"Vertical",t.checkValidity(o,a,n,s)?t.placeShip(o,a,n,s):e(n)},getBoard:function(){return t},getShips:function(){return n},getShotCoordinates:function(){return r},createBoard:t.createBoard,getBoard:t.getBoard,placeShip:t.placeShip,checkValidity:t.checkValidity,receiveAttack:t.receiveAttack,isAllSunk:t.isAllSunk,getMissedPositions:t.getMissedPositions,getAttackedPositions:t.getAttackedPositions,getShipsPositions:t.getShipsPositions}},n=function(){let e=t(),n=t();e.createBoard(),n.createBoard();let r=e.getBoard(),i=n.getBoard(),o=e.getShips(),a=n.getShips(),s="gamer",l="";return{gamer:e,computer:n,gameLoop:function(e,r){"gamer"==s?(n.receiveAttack(e,r),n.isAllSunk()?l="gamer":s="computer"):"computer"==s&&(t.receiveAttack(e,r),t.isAllSunk()?l="computer":s="gamer")},getWinner:function(){return l},getGamerBoard:function(){return r},getComputerBoard:function(){return i},getGamerShips:function(){return o},getComputerShips:function(){return a}}}();(function(){const e=document.querySelector(".display"),t=document.querySelector(".player-board"),r=document.querySelector(".computer-board"),i=document.querySelector(".direction");let o=n.getGamerBoard(),a=n.getComputerBoard(),s=[...n.getGamerShips()],l=[...n.getComputerShips()];function c(e){let t=e.classList[1].split(",");return[parseInt(t[0]),parseInt(t[1])]}return window.addEventListener("load",(()=>{e.textContent="Welcome to Battleship. Place your Carrier"})),window.addEventListener("click",(()=>{switch(s.length){case 4:e.textContent="Place your Battleship";break;case 3:e.textContent="Place your Cruiser";break;case 2:e.textContent="Place your Submarine";break;case 1:e.textContent="Place your Destroyer";break;default:e.textContent="hey"}})),function(){let e,r,a=s[0];t.addEventListener("click",(l=>{if(l.target.classList.contains("player-board")){let d=l.target;if(e=c(d)[0],r=c(d)[1],s.length>0&&n.gamer.checkValidity(e,r,a,i.value)){n.gamer.placeShip(e,r,a,i.value),s.shift(),a=s[0];let l=n.gamer.getShipsPositions();for(let e=0;e<l.length;e++)t.children[l[e]].classList.add("player-ship");console.log(o)}}})),t.addEventListener("mouseover",(t=>{if(t.target.classList.contains("grid")){let o=t.target;e=c(o)[0],r=c(o)[1],s.length>0&&n.gamer.checkValidity(e,r,a,i.value)?o.classList.add("green"):s.length>0&&o.classList.add("red")}})),t.addEventListener("mouseout",(e=>{if(e.target.classList.contains("grid")){(t=e.target).classList.remove("green"),t.classList.remove("red")}var t}))}(),i.addEventListener("click",(()=>{"Horizontal"==i.value?(i.value="Vertical",i.textContent="Set Horizontal"):(i.value="Horizontal",i.textContent="Set Vertical")})),function(){let e=l[0];window.addEventListener("load",(()=>{for(;l.length>0;)n.computer.randomPlacement(e),l.shift(),e=l[0];let t=n.computer.getShipsPositions();for(let e=0;e<t.length;e++)r.children[t[e]].classList.add("computer-ship");console.log(a)}))}(),{hideDisplay:function(e){e.classList.remove("show"),e.classList.add("hide")},showDisplay:function(e){e.classList.remove("hide"),e.classList.add("show")},createGameBoards:function(){for(let e=0;e<o.length;e++){let n=document.createElement("div");n.classList.add(e),n.classList.add(o[e].coordinates),n.classList.add("grid"),n.classList.add("player-board"),t.appendChild(n)}for(let e=0;e<a.length;e++){let t=document.createElement("div");t.classList.add(e),t.classList.add(a[e].coordinates),t.classList.add("grid"),t.classList.add("computer-board"),r.appendChild(t)}}}})().createGameBoards()})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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R0FDbkJBLEVBQVFqQixVQUFVZSxPQUFPLFFBQ3pCRSxFQUFRakIsVUFBVWEsSUFBSSxPQUN4QixFQWlLRU0saUJBL0pGLFdBQ0UsSUFBSyxJQUFJbkUsRUFBSSxFQUFHQSxFQUFJNEIsRUFBV2hELE9BQVFvQixJQUFLLENBQzFDLElBQUl1RCxFQUFPZCxTQUFTMkIsY0FBYyxPQUNsQ2IsRUFBS1AsVUFBVWEsSUFBSTdELEdBQ25CdUQsRUFBS1AsVUFBVWEsSUFBSWpDLEVBQVc1QixHQUFHSyxhQUNqQ2tELEVBQUtQLFVBQVVhLElBQUksUUFDbkJOLEVBQUtQLFVBQVVhLElBQUksZ0JBQ25CbEIsRUFBZTBCLFlBQVlkLEVBQzdCLENBQ0EsSUFBSyxJQUFJdkQsRUFBSSxFQUFHQSxFQUFJNkIsRUFBY2pELE9BQVFvQixJQUFLLENBQzdDLElBQUl1RCxFQUFPZCxTQUFTMkIsY0FBYyxPQUNsQ2IsRUFBS1AsVUFBVWEsSUFBSTdELEdBQ25CdUQsRUFBS1AsVUFBVWEsSUFBSWhDLEVBQWM3QixHQUFHSyxhQUNwQ2tELEVBQUtQLFVBQVVhLElBQUksUUFDbkJOLEVBQUtQLFVBQVVhLElBQUksa0JBQ25CakIsRUFBaUJ5QixZQUFZZCxFQUMvQixDQUNGLEVBZ0pELEVBdExXLEdDQ1JZLGtCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zaGlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvcGxheWVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ2FtZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2RvbS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHNoaXAgPSBmdW5jdGlvbiAobGVuZ3RoLCBuYW1lKSB7XG4gIGxldCBoaXRzID0gMDtcbiAgbGV0IHN1bmsgPSBmYWxzZTtcbiAgbGV0IHNoaXBOYW1lID0gbmFtZTtcblxuICBmdW5jdGlvbiBoaXQoKSB7XG4gICAgaGl0cyArPSAxO1xuICAgIHJldHVybiBoaXRzO1xuICB9XG5cbiAgZnVuY3Rpb24gaXNTdW5rKCkge1xuICAgIGlmIChoaXRzID09IGxlbmd0aCkge1xuICAgICAgc3VuayA9IHRydWU7XG4gICAgfVxuICAgIHJldHVybiBzdW5rO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0SGl0cygpIHtcbiAgICByZXR1cm4gaGl0cztcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgaGl0LFxuICAgIGdldEhpdHMsXG4gICAgaXNTdW5rLFxuICAgIGxlbmd0aCxcbiAgICBzaGlwTmFtZSxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHNoaXA7XG4iLCJpbXBvcnQgc2hpcCBmcm9tIFwiLi9zaGlwXCI7XG5pbXBvcnQgZ2FtZUJvYXJkIGZyb20gXCIuL2dhbWVib2FyZFwiO1xuXG5jb25zdCBwbGF5ZXIgPSBmdW5jdGlvbiAoKSB7XG4gIGxldCBib2FyZCA9IGdhbWVCb2FyZCgpO1xuICBsZXQgY2FycmllciA9IHNoaXAoNSwgXCJDYXJyaWVyXCIpO1xuICBsZXQgYmF0dGxlc2hpcCA9IHNoaXAoNCwgXCJCYXR0bGVzaGlwXCIpO1xuICBsZXQgY3J1aXNlciA9IHNoaXAoMywgXCJDcnVpc2VyXCIpO1xuICBsZXQgc3VibWFyaW5lID0gc2hpcCgzLCBcIlN1Ym1hcmluZVwiKTtcbiAgbGV0IGRlc3Ryb3llciA9IHNoaXAoMiwgXCJEZXN0cm95ZXJcIik7XG4gIGxldCBzaGlwcyA9IFtjYXJyaWVyLCBiYXR0bGVzaGlwLCBjcnVpc2VyLCBzdWJtYXJpbmUsIGRlc3Ryb3llcl07XG4gIGxldCBzaG90Q29vcmRpbmF0ZXMgPSBbXG4gICAgLi4uYm9hcmQuZ2V0QXR0YWNrZWRQb3NpdGlvbnMoKSxcbiAgICAuLi5ib2FyZC5nZXRNaXNzZWRQb3NpdGlvbnMoKSxcbiAgXTtcblxuICBmdW5jdGlvbiByYW5kb21BdHRhY2soKSB7XG4gICAgbGV0IHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgbGV0IHkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG5cbiAgICByZXR1cm4gW3gsIHldO1xuICB9XG5cbiAgZnVuY3Rpb24gcmFuZG9tUGxhY2VtZW50KHNoaXApIHtcbiAgICBsZXQgY29vcmRpbmF0ZXMgPSByYW5kb21BdHRhY2soKTtcbiAgICBsZXQgcG9zMSA9IGNvb3JkaW5hdGVzWzBdO1xuICAgIGxldCBwb3MyID0gY29vcmRpbmF0ZXNbMV07XG4gICAgbGV0IGRpcmVjdGlvbiA9IFwiXCI7XG5cbiAgICBsZXQgcmFuZG9tRGlyZWN0aW9uID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMik7XG5cbiAgICBpZiAocmFuZG9tRGlyZWN0aW9uID09IDEpIHtcbiAgICAgIGRpcmVjdGlvbiA9IFwiSG9yaXpvbnRhbFwiO1xuICAgIH0gZWxzZSB7XG4gICAgICBkaXJlY3Rpb24gPSBcIlZlcnRpY2FsXCI7XG4gICAgfVxuXG4gICAgaWYgKGJvYXJkLmNoZWNrVmFsaWRpdHkocG9zMSwgcG9zMiwgc2hpcCwgZGlyZWN0aW9uKSkge1xuICAgICAgYm9hcmQucGxhY2VTaGlwKHBvczEsIHBvczIsIHNoaXAsIGRpcmVjdGlvbik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJhbmRvbVBsYWNlbWVudChzaGlwKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBnZXRCb2FyZCgpIHtcbiAgICByZXR1cm4gYm9hcmQ7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRTaGlwcygpIHtcbiAgICByZXR1cm4gc2hpcHM7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRTaG90Q29vcmRpbmF0ZXMoKSB7XG4gICAgcmV0dXJuIHNob3RDb29yZGluYXRlcztcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgcmFuZG9tQXR0YWNrLFxuICAgIHJhbmRvbVBsYWNlbWVudCxcbiAgICBnZXRCb2FyZCxcbiAgICBnZXRTaGlwcyxcbiAgICBnZXRTaG90Q29vcmRpbmF0ZXMsXG4gICAgY3JlYXRlQm9hcmQ6IGJvYXJkLmNyZWF0ZUJvYXJkLFxuICAgIGdldEJvYXJkOiBib2FyZC5nZXRCb2FyZCxcbiAgICBwbGFjZVNoaXA6IGJvYXJkLnBsYWNlU2hpcCxcbiAgICBjaGVja1ZhbGlkaXR5OiBib2FyZC5jaGVja1ZhbGlkaXR5LFxuICAgIHJlY2VpdmVBdHRhY2s6IGJvYXJkLnJlY2VpdmVBdHRhY2ssXG4gICAgaXNBbGxTdW5rOiBib2FyZC5pc0FsbFN1bmssXG4gICAgZ2V0TWlzc2VkUG9zaXRpb25zOiBib2FyZC5nZXRNaXNzZWRQb3NpdGlvbnMsXG4gICAgZ2V0QXR0YWNrZWRQb3NpdGlvbnM6IGJvYXJkLmdldEF0dGFja2VkUG9zaXRpb25zLFxuICAgIGdldFNoaXBzUG9zaXRpb25zOiBib2FyZC5nZXRTaGlwc1Bvc2l0aW9ucyxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHBsYXllcjtcbiIsImltcG9ydCBzaGlwIGZyb20gXCIuL3NoaXBcIjtcbmNvbnN0IGdhbWVCb2FyZCA9IGZ1bmN0aW9uICgpIHtcbiAgbGV0IGJvYXJkID0gW107XG4gIGxldCBtaXNzZWRBdHRhY2sgPSBbXTtcbiAgbGV0IGF0dGFja2VkUG9zaXRpb24gPSBbXTtcbiAgbGV0IHNoaXBQb3NpdGlvbiA9IFtdO1xuICBsZXQgc2hpcHMgPSBbXTtcblxuICBmdW5jdGlvbiBjcmVhdGVDb29yZGluYXRlKGNvb3JkaW5hdGVzLCBuYW1lKSB7XG4gICAgcmV0dXJuIHsgY29vcmRpbmF0ZXMsIG5hbWUgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGluZGV4RmluZGVyKHBvczEsIHBvczIpIHtcbiAgICBsZXQgaW5kZXggPSBwb3MxICogMTAgKyBwb3MyO1xuICAgIHJldHVybiBpbmRleDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUJvYXJkKCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaisrKSB7XG4gICAgICAgIGxldCBuZXdDb29yZGluYXRlcyA9IGNyZWF0ZUNvb3JkaW5hdGUoKTtcbiAgICAgICAgbmV3Q29vcmRpbmF0ZXMuY29vcmRpbmF0ZXMgPSBbaSwgal07XG4gICAgICAgIG5ld0Nvb3JkaW5hdGVzLm5hbWUgPSBudWxsO1xuICAgICAgICBib2FyZC5wdXNoKG5ld0Nvb3JkaW5hdGVzKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGJvYXJkO1xuICB9XG5cbiAgZnVuY3Rpb24gY2hlY2tWYWxpZGl0eShwb3MxLCBwb3MyLCBzaGlwLCBkaXJlY3Rpb24pIHtcbiAgICBsZXQgaW5kZXggPSBpbmRleEZpbmRlcihwb3MxLCBwb3MyKTtcblxuICAgIGlmIChkaXJlY3Rpb24gPT0gXCJIb3Jpem9udGFsXCIpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoc2hpcFBvc2l0aW9uLmluY2x1ZGVzKGluZGV4ICsgaSkpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoZGlyZWN0aW9uID09IFwiVmVydGljYWxcIikge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChzaGlwUG9zaXRpb24uaW5jbHVkZXMoaW5kZXggKyBpICogMTApKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGRpcmVjdGlvbiA9PSBcIkhvcml6b250YWxcIiAmJiBwb3MyICsgc2hpcC5sZW5ndGggPiAxMCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGlmIChkaXJlY3Rpb24gPT0gXCJWZXJ0aWNhbFwiICYmIHBvczEgKyBzaGlwLmxlbmd0aCA+IDEwKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgZnVuY3Rpb24gcGxhY2VTaGlwKHBvczEsIHBvczIsIHNoaXAsIGRpcmVjdGlvbikge1xuICAgIGlmIChcbiAgICAgIGRpcmVjdGlvbiA9PSBcIkhvcml6b250YWxcIiAmJlxuICAgICAgY2hlY2tWYWxpZGl0eShwb3MxLCBwb3MyLCBzaGlwLCBkaXJlY3Rpb24pXG4gICAgKSB7XG4gICAgICBsZXQgaW5kZXggPSBpbmRleEZpbmRlcihwb3MxLCBwb3MyKTtcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGJvYXJkW2luZGV4ICsgaV0ubmFtZSA9IHNoaXAuc2hpcE5hbWU7XG4gICAgICAgIHNoaXBQb3NpdGlvbi5wdXNoKGluZGV4ICsgaSk7XG4gICAgICAgIGNvbnNvbGUubG9nKHNoaXBQb3NpdGlvbik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGRpcmVjdGlvbiA9PSBcIlZlcnRpY2FsXCIgJiYgY2hlY2tWYWxpZGl0eShwb3MxLCBwb3MyLCBzaGlwLCBkaXJlY3Rpb24pKSB7XG4gICAgICBsZXQgaW5kZXggPSBpbmRleEZpbmRlcihwb3MxLCBwb3MyKTtcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGJvYXJkW2luZGV4ICsgaSAqIDEwXS5uYW1lID0gc2hpcC5zaGlwTmFtZTtcbiAgICAgICAgc2hpcFBvc2l0aW9uLnB1c2goaW5kZXggKyBpICogMTApO1xuICAgICAgICBjb25zb2xlLmxvZyhzaGlwUG9zaXRpb24pO1xuICAgICAgfVxuICAgIH1cbiAgICBzaGlwcy5wdXNoKHNoaXApO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVjZWl2ZUF0dGFjayhwb3MxLCBwb3MyKSB7XG4gICAgbGV0IGluZGV4ID0gaW5kZXhGaW5kZXIocG9zMSwgcG9zMik7XG5cbiAgICBpZiAoYm9hcmRbaW5kZXhdLm5hbWUgIT0gbnVsbCkge1xuICAgICAgYXR0YWNrZWRQb3NpdGlvbi5wdXNoKGluZGV4KTtcbiAgICAgIGZpbmRTaGlwKGJvYXJkW2luZGV4XS5uYW1lKS5oaXQoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbWlzc2VkQXR0YWNrLnB1c2goaW5kZXgpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGZpbmRTaGlwKG5hbWUpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoc2hpcHNbaV0uc2hpcE5hbWUgPT0gbmFtZSkge1xuICAgICAgICByZXR1cm4gc2hpcHNbaV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gaXNBbGxTdW5rKCkge1xuICAgIGlmIChzaGlwUG9zaXRpb24ubGVuZ3RoID09IGF0dGFja2VkUG9zaXRpb24ubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBnZXRCb2FyZCgpIHtcbiAgICByZXR1cm4gYm9hcmQ7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRNaXNzZWRQb3NpdGlvbnMoKSB7XG4gICAgcmV0dXJuIG1pc3NlZEF0dGFjaztcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldFNoaXBzUG9zaXRpb25zKCkge1xuICAgIHJldHVybiBzaGlwUG9zaXRpb247XG4gIH1cblxuICBmdW5jdGlvbiBnZXRBdHRhY2tlZFBvc2l0aW9ucygpIHtcbiAgICByZXR1cm4gYXR0YWNrZWRQb3NpdGlvbjtcbiAgfVxuICByZXR1cm4ge1xuICAgIGNyZWF0ZUJvYXJkLFxuICAgIGdldEJvYXJkLFxuICAgIGNoZWNrVmFsaWRpdHksXG4gICAgcGxhY2VTaGlwLFxuICAgIHJlY2VpdmVBdHRhY2ssXG4gICAgaXNBbGxTdW5rLFxuICAgIGdldE1pc3NlZFBvc2l0aW9ucyxcbiAgICBnZXRBdHRhY2tlZFBvc2l0aW9ucyxcbiAgICBnZXRTaGlwc1Bvc2l0aW9ucyxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGdhbWVCb2FyZDtcbiIsImltcG9ydCBzaGlwIGZyb20gXCIuL3NoaXBcIjtcbmltcG9ydCBnYW1lQm9hcmQgZnJvbSBcIi4vZ2FtZWJvYXJkXCI7XG5pbXBvcnQgcGxheWVyIGZyb20gXCIuL3BsYXllclwiO1xuXG5jb25zdCBnYW1lID0gKGZ1bmN0aW9uICgpIHtcbiAgbGV0IGdhbWVyID0gcGxheWVyKCk7XG4gIGxldCBjb21wdXRlciA9IHBsYXllcigpO1xuXG4gIGdhbWVyLmNyZWF0ZUJvYXJkKCk7XG4gIGNvbXB1dGVyLmNyZWF0ZUJvYXJkKCk7XG5cbiAgbGV0IGdhbWVyQm9hcmQgPSBnYW1lci5nZXRCb2FyZCgpO1xuICBsZXQgY29tcHV0ZXJCb2FyZCA9IGNvbXB1dGVyLmdldEJvYXJkKCk7XG4gIGxldCBnYW1lclNoaXBzID0gZ2FtZXIuZ2V0U2hpcHMoKTtcbiAgbGV0IGNvbXB1dGVyU2hpcHMgPSBjb21wdXRlci5nZXRTaGlwcygpO1xuXG4gIGxldCB0dXJuID0gXCJnYW1lclwiO1xuICBsZXQgd2lubmVyID0gXCJcIjtcblxuICBmdW5jdGlvbiBnYW1lTG9vcChwb3MxLCBwb3MyKSB7XG4gICAgaWYgKHR1cm4gPT0gXCJnYW1lclwiKSB7XG4gICAgICBjb21wdXRlci5yZWNlaXZlQXR0YWNrKHBvczEsIHBvczIpO1xuICAgICAgaWYgKGNvbXB1dGVyLmlzQWxsU3VuaygpKSB7XG4gICAgICAgIHdpbm5lciA9IFwiZ2FtZXJcIjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHR1cm4gPSBcImNvbXB1dGVyXCI7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0dXJuID09IFwiY29tcHV0ZXJcIikge1xuICAgICAgcGxheWVyLnJlY2VpdmVBdHRhY2socG9zMSwgcG9zMik7XG4gICAgICBpZiAocGxheWVyLmlzQWxsU3VuaygpKSB7XG4gICAgICAgIHdpbm5lciA9IFwiY29tcHV0ZXJcIjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHR1cm4gPSBcImdhbWVyXCI7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZ2V0V2lubmVyKCkge1xuICAgIHJldHVybiB3aW5uZXI7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRHYW1lckJvYXJkKCkge1xuICAgIHJldHVybiBnYW1lckJvYXJkO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0Q29tcHV0ZXJCb2FyZCgpIHtcbiAgICByZXR1cm4gY29tcHV0ZXJCb2FyZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldEdhbWVyU2hpcHMoKSB7XG4gICAgcmV0dXJuIGdhbWVyU2hpcHM7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRDb21wdXRlclNoaXBzKCkge1xuICAgIHJldHVybiBjb21wdXRlclNoaXBzO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBnYW1lcixcbiAgICBjb21wdXRlcixcbiAgICBnYW1lTG9vcCxcbiAgICBnZXRXaW5uZXIsXG4gICAgZ2V0R2FtZXJCb2FyZCxcbiAgICBnZXRDb21wdXRlckJvYXJkLFxuICAgIGdldEdhbWVyU2hpcHMsXG4gICAgZ2V0Q29tcHV0ZXJTaGlwcyxcbiAgfTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGdhbWU7XG4iLCJpbXBvcnQgc2hpcCBmcm9tIFwiLi9zaGlwXCI7XG5pbXBvcnQgZ2FtZUJvYXJkIGZyb20gXCIuL2dhbWVib2FyZFwiO1xuaW1wb3J0IHBsYXllciBmcm9tIFwiLi9wbGF5ZXJcIjtcbmltcG9ydCBnYW1lIGZyb20gXCIuL2dhbWVcIjtcblxuY29uc3QgZG9tID0gKGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgZGlzcGxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGlzcGxheVwiKTtcbiAgY29uc3QgcGxheWVyQm9hcmREaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBsYXllci1ib2FyZFwiKTtcbiAgY29uc3QgY29tcHV0ZXJCb2FyZERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29tcHV0ZXItYm9hcmRcIik7XG4gIGNvbnN0IGRpcmVjdGlvbkJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGlyZWN0aW9uXCIpO1xuXG4gIGxldCBnYW1lckJvYXJkID0gZ2FtZS5nZXRHYW1lckJvYXJkKCk7XG4gIGxldCBjb21wdXRlckJvYXJkID0gZ2FtZS5nZXRDb21wdXRlckJvYXJkKCk7XG4gIGxldCBnYW1lclNoaXBzID0gWy4uLmdhbWUuZ2V0R2FtZXJTaGlwcygpXTtcbiAgbGV0IGNvbXB1dGVyU2hpcHMgPSBbLi4uZ2FtZS5nZXRDb21wdXRlclNoaXBzKCldO1xuXG4gIGZ1bmN0aW9uIGhpZGVEaXNwbGF5KGVsZW1lbnQpIHtcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJzaG93XCIpO1xuICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImhpZGVcIik7XG4gIH1cblxuICBmdW5jdGlvbiBzaG93RGlzcGxheShlbGVtZW50KSB7XG4gICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKTtcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJzaG93XCIpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlR2FtZUJvYXJkcygpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGdhbWVyQm9hcmQubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBncmlkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGdyaWQuY2xhc3NMaXN0LmFkZChpKTtcbiAgICAgIGdyaWQuY2xhc3NMaXN0LmFkZChnYW1lckJvYXJkW2ldLmNvb3JkaW5hdGVzKTtcbiAgICAgIGdyaWQuY2xhc3NMaXN0LmFkZChcImdyaWRcIik7XG4gICAgICBncmlkLmNsYXNzTGlzdC5hZGQoXCJwbGF5ZXItYm9hcmRcIik7XG4gICAgICBwbGF5ZXJCb2FyZERpdi5hcHBlbmRDaGlsZChncmlkKTtcbiAgICB9XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb21wdXRlckJvYXJkLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgZ3JpZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBncmlkLmNsYXNzTGlzdC5hZGQoaSk7XG4gICAgICBncmlkLmNsYXNzTGlzdC5hZGQoY29tcHV0ZXJCb2FyZFtpXS5jb29yZGluYXRlcyk7XG4gICAgICBncmlkLmNsYXNzTGlzdC5hZGQoXCJncmlkXCIpO1xuICAgICAgZ3JpZC5jbGFzc0xpc3QuYWRkKFwiY29tcHV0ZXItYm9hcmRcIik7XG4gICAgICBjb21wdXRlckJvYXJkRGl2LmFwcGVuZENoaWxkKGdyaWQpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGdldENvb3JkaW5hdGVzKHRhcmdldCkge1xuICAgIGxldCBjb29yZGluYXRlcyA9IHRhcmdldC5jbGFzc0xpc3RbMV0uc3BsaXQoXCIsXCIpO1xuICAgIGxldCBwb3MxID0gcGFyc2VJbnQoY29vcmRpbmF0ZXNbMF0pO1xuICAgIGxldCBwb3MyID0gcGFyc2VJbnQoY29vcmRpbmF0ZXNbMV0pO1xuXG4gICAgcmV0dXJuIFtwb3MxLCBwb3MyXTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFkZFZhbGlkaXR5Q29sb3IoY2VsbCkge1xuICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcImdyZWVuXCIpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVtb3ZlVmFsaWRpdHlDb2xvcihjZWxsKSB7XG4gICAgY2VsbC5jbGFzc0xpc3QucmVtb3ZlKFwiZ3JlZW5cIik7XG4gICAgY2VsbC5jbGFzc0xpc3QucmVtb3ZlKFwicmVkXCIpO1xuICB9XG5cbiAgZnVuY3Rpb24gYWRkTm9uVmFsaWRpdHlDb2xvcihjZWxsKSB7XG4gICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwicmVkXCIpO1xuICB9XG5cbiAgKGZ1bmN0aW9uIGRpc3BsYXlFdmVudHMoKSB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsICgpID0+IHtcbiAgICAgIGRpc3BsYXkudGV4dENvbnRlbnQgPSBcIldlbGNvbWUgdG8gQmF0dGxlc2hpcC4gUGxhY2UgeW91ciBDYXJyaWVyXCI7XG4gICAgfSk7XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIHN3aXRjaCAoZ2FtZXJTaGlwcy5sZW5ndGgpIHtcbiAgICAgICAgY2FzZSA0OlxuICAgICAgICAgIGRpc3BsYXkudGV4dENvbnRlbnQgPSBcIlBsYWNlIHlvdXIgQmF0dGxlc2hpcFwiO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgZGlzcGxheS50ZXh0Q29udGVudCA9IFwiUGxhY2UgeW91ciBDcnVpc2VyXCI7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBkaXNwbGF5LnRleHRDb250ZW50ID0gXCJQbGFjZSB5b3VyIFN1Ym1hcmluZVwiO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgZGlzcGxheS50ZXh0Q29udGVudCA9IFwiUGxhY2UgeW91ciBEZXN0cm95ZXJcIjtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGRpc3BsYXkudGV4dENvbnRlbnQgPSBcImhleVwiO1xuICAgICAgfVxuICAgIH0pO1xuICB9KSgpO1xuXG4gIChmdW5jdGlvbiBwbGF5ZXJCb2FyZEV2ZW50cygpIHtcbiAgICBsZXQgY3VycmVudFNoaXAgPSBnYW1lclNoaXBzWzBdO1xuICAgIGxldCBwb3MxO1xuICAgIGxldCBwb3MyO1xuXG4gICAgcGxheWVyQm9hcmREaXYuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChncmlkKSA9PiB7XG4gICAgICBpZiAoZ3JpZC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwicGxheWVyLWJvYXJkXCIpKSB7XG4gICAgICAgIGxldCB0YXJnZXQgPSBncmlkLnRhcmdldDtcbiAgICAgICAgcG9zMSA9IGdldENvb3JkaW5hdGVzKHRhcmdldClbMF07XG4gICAgICAgIHBvczIgPSBnZXRDb29yZGluYXRlcyh0YXJnZXQpWzFdO1xuICAgICAgICBpZiAoXG4gICAgICAgICAgZ2FtZXJTaGlwcy5sZW5ndGggPiAwICYmXG4gICAgICAgICAgZ2FtZS5nYW1lci5jaGVja1ZhbGlkaXR5KFxuICAgICAgICAgICAgcG9zMSxcbiAgICAgICAgICAgIHBvczIsXG4gICAgICAgICAgICBjdXJyZW50U2hpcCxcbiAgICAgICAgICAgIGRpcmVjdGlvbkJ1dHRvbi52YWx1ZVxuICAgICAgICAgIClcbiAgICAgICAgKSB7XG4gICAgICAgICAgZ2FtZS5nYW1lci5wbGFjZVNoaXAocG9zMSwgcG9zMiwgY3VycmVudFNoaXAsIGRpcmVjdGlvbkJ1dHRvbi52YWx1ZSk7XG4gICAgICAgICAgZ2FtZXJTaGlwcy5zaGlmdCgpO1xuICAgICAgICAgIGN1cnJlbnRTaGlwID0gZ2FtZXJTaGlwc1swXTtcbiAgICAgICAgICBsZXQgc2hpcFBvc2l0aW9ucyA9IGdhbWUuZ2FtZXIuZ2V0U2hpcHNQb3NpdGlvbnMoKTtcbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBQb3NpdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHBsYXllckJvYXJkRGl2LmNoaWxkcmVuW3NoaXBQb3NpdGlvbnNbaV1dLmNsYXNzTGlzdC5hZGQoXG4gICAgICAgICAgICAgIFwicGxheWVyLXNoaXBcIlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgY29uc29sZS5sb2coZ2FtZXJCb2FyZCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHBsYXllckJvYXJkRGl2LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW92ZXJcIiwgKGdyaWQpID0+IHtcbiAgICAgIGlmIChncmlkLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJncmlkXCIpKSB7XG4gICAgICAgIGxldCB0YXJnZXQgPSBncmlkLnRhcmdldDtcbiAgICAgICAgcG9zMSA9IGdldENvb3JkaW5hdGVzKHRhcmdldClbMF07XG4gICAgICAgIHBvczIgPSBnZXRDb29yZGluYXRlcyh0YXJnZXQpWzFdO1xuICAgICAgICBpZiAoXG4gICAgICAgICAgZ2FtZXJTaGlwcy5sZW5ndGggPiAwICYmXG4gICAgICAgICAgZ2FtZS5nYW1lci5jaGVja1ZhbGlkaXR5KFxuICAgICAgICAgICAgcG9zMSxcbiAgICAgICAgICAgIHBvczIsXG4gICAgICAgICAgICBjdXJyZW50U2hpcCxcbiAgICAgICAgICAgIGRpcmVjdGlvbkJ1dHRvbi52YWx1ZVxuICAgICAgICAgIClcbiAgICAgICAgKSB7XG4gICAgICAgICAgYWRkVmFsaWRpdHlDb2xvcih0YXJnZXQpO1xuICAgICAgICB9IGVsc2UgaWYgKGdhbWVyU2hpcHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGFkZE5vblZhbGlkaXR5Q29sb3IodGFyZ2V0KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcGxheWVyQm9hcmREaXYuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3V0XCIsIChncmlkKSA9PiB7XG4gICAgICBpZiAoZ3JpZC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZ3JpZFwiKSkge1xuICAgICAgICBsZXQgdGFyZ2V0ID0gZ3JpZC50YXJnZXQ7XG4gICAgICAgIHJlbW92ZVZhbGlkaXR5Q29sb3IodGFyZ2V0KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSkoKTtcblxuICBkaXJlY3Rpb25CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBpZiAoZGlyZWN0aW9uQnV0dG9uLnZhbHVlID09IFwiSG9yaXpvbnRhbFwiKSB7XG4gICAgICBkaXJlY3Rpb25CdXR0b24udmFsdWUgPSBcIlZlcnRpY2FsXCI7XG4gICAgICBkaXJlY3Rpb25CdXR0b24udGV4dENvbnRlbnQgPSBcIlNldCBIb3Jpem9udGFsXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRpcmVjdGlvbkJ1dHRvbi52YWx1ZSA9IFwiSG9yaXpvbnRhbFwiO1xuICAgICAgZGlyZWN0aW9uQnV0dG9uLnRleHRDb250ZW50ID0gXCJTZXQgVmVydGljYWxcIjtcbiAgICB9XG4gIH0pO1xuXG4gIChmdW5jdGlvbiBjb21wdXRlckJvYXJkRXZlbnRzKCkge1xuICAgIGxldCBjdXJyZW50U2hpcCA9IGNvbXB1dGVyU2hpcHNbMF07XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsICgpID0+IHtcbiAgICAgIHdoaWxlIChjb21wdXRlclNoaXBzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgZ2FtZS5jb21wdXRlci5yYW5kb21QbGFjZW1lbnQoY3VycmVudFNoaXApO1xuICAgICAgICBjb21wdXRlclNoaXBzLnNoaWZ0KCk7XG4gICAgICAgIGN1cnJlbnRTaGlwID0gY29tcHV0ZXJTaGlwc1swXTtcbiAgICAgIH1cbiAgICAgIGxldCBzaGlwUG9zaXRpb25zID0gZ2FtZS5jb21wdXRlci5nZXRTaGlwc1Bvc2l0aW9ucygpO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwUG9zaXRpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbXB1dGVyQm9hcmREaXYuY2hpbGRyZW5bc2hpcFBvc2l0aW9uc1tpXV0uY2xhc3NMaXN0LmFkZChcbiAgICAgICAgICBcImNvbXB1dGVyLXNoaXBcIlxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgY29uc29sZS5sb2coY29tcHV0ZXJCb2FyZCk7XG4gICAgfSk7XG4gIH0pKCk7XG5cbiAgcmV0dXJuIHtcbiAgICBoaWRlRGlzcGxheSxcbiAgICBzaG93RGlzcGxheSxcbiAgICBjcmVhdGVHYW1lQm9hcmRzLFxuICB9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgZG9tO1xuIiwiaW1wb3J0IGRvbSBmcm9tIFwiLi9kb21cIjtcbmltcG9ydCBzaGlwIGZyb20gXCIuL3NoaXBcIjtcbmltcG9ydCBnYW1lQm9hcmQgZnJvbSBcIi4vZ2FtZWJvYXJkXCI7XG5pbXBvcnQgcGxheWVyIGZyb20gXCIuL3BsYXllclwiO1xuaW1wb3J0IGdhbWUgZnJvbSBcIi4vZ2FtZVwiO1xuXG5kb20uY3JlYXRlR2FtZUJvYXJkcygpO1xuZ2FtZTtcbiJdLCJuYW1lcyI6WyJsZW5ndGgiLCJuYW1lIiwiaGl0cyIsInN1bmsiLCJoaXQiLCJnZXRIaXRzIiwiaXNTdW5rIiwic2hpcE5hbWUiLCJib2FyZCIsIm1pc3NlZEF0dGFjayIsImF0dGFja2VkUG9zaXRpb24iLCJzaGlwUG9zaXRpb24iLCJzaGlwcyIsImluZGV4RmluZGVyIiwicG9zMSIsInBvczIiLCJjaGVja1ZhbGlkaXR5Iiwic2hpcCIsImRpcmVjdGlvbiIsImluZGV4IiwiaSIsImluY2x1ZGVzIiwiY3JlYXRlQm9hcmQiLCJqIiwibmV3Q29vcmRpbmF0ZXMiLCJjb29yZGluYXRlcyIsImNyZWF0ZUNvb3JkaW5hdGUiLCJwdXNoIiwiZ2V0Qm9hcmQiLCJwbGFjZVNoaXAiLCJjb25zb2xlIiwibG9nIiwicmVjZWl2ZUF0dGFjayIsImZpbmRTaGlwIiwiaXNBbGxTdW5rIiwiZ2V0TWlzc2VkUG9zaXRpb25zIiwiZ2V0QXR0YWNrZWRQb3NpdGlvbnMiLCJnZXRTaGlwc1Bvc2l0aW9ucyIsInNob3RDb29yZGluYXRlcyIsInJhbmRvbUF0dGFjayIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInJhbmRvbVBsYWNlbWVudCIsImdldFNoaXBzIiwiZ2V0U2hvdENvb3JkaW5hdGVzIiwiZ2FtZXIiLCJjb21wdXRlciIsImdhbWVyQm9hcmQiLCJjb21wdXRlckJvYXJkIiwiZ2FtZXJTaGlwcyIsImNvbXB1dGVyU2hpcHMiLCJ0dXJuIiwid2lubmVyIiwiZ2FtZUxvb3AiLCJnZXRXaW5uZXIiLCJnZXRHYW1lckJvYXJkIiwiZ2V0Q29tcHV0ZXJCb2FyZCIsImdldEdhbWVyU2hpcHMiLCJnZXRDb21wdXRlclNoaXBzIiwiZGlzcGxheSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInBsYXllckJvYXJkRGl2IiwiY29tcHV0ZXJCb2FyZERpdiIsImRpcmVjdGlvbkJ1dHRvbiIsImdldENvb3JkaW5hdGVzIiwidGFyZ2V0IiwiY2xhc3NMaXN0Iiwic3BsaXQiLCJwYXJzZUludCIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJ0ZXh0Q29udGVudCIsImN1cnJlbnRTaGlwIiwiZ3JpZCIsImNvbnRhaW5zIiwidmFsdWUiLCJzaGlmdCIsInNoaXBQb3NpdGlvbnMiLCJjaGlsZHJlbiIsImFkZCIsImNlbGwiLCJyZW1vdmUiLCJoaWRlRGlzcGxheSIsImVsZW1lbnQiLCJzaG93RGlzcGxheSIsImNyZWF0ZUdhbWVCb2FyZHMiLCJjcmVhdGVFbGVtZW50IiwiYXBwZW5kQ2hpbGQiXSwic291cmNlUm9vdCI6IiJ9